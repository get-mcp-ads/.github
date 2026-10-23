#!/usr/bin/env node
// Regenerates the server table and the release feed of profile/README.md from
// each repository's releases and its server-card.json on the default branch.
// Runs on a schedule in GitHub Actions; needs GITHUB_TOKEN with read access.
import { readFileSync, writeFileSync } from "node:fs";

const ORG = "get-mcp-ads";
const NAMES = {
  "meta-ads-mcp-server": "Meta Ads",
  "google-ads-mcp-server": "Google Ads",
  "tiktok-ads-mcp-server": "TikTok Ads",
  "pinterest-ads-mcp-server": "Pinterest Ads",
  "x-ads-mcp-server": "X Ads",
  "linkedin-ads-mcp-server": "LinkedIn Ads",
  "bing-ads-mcp-server": "Microsoft Advertising",
  "amazon-ads-mcp-server": "Amazon Ads",
  "reddit-ads-mcp-server": "Reddit Ads",
  "snapchat-ads-mcp-server": "Snapchat Ads",
  "apple-ads-mcp-server": "Apple Ads",
  "chatgpt-ads-mcp-server": "ChatGPT Ads",
  "adjust-mcp-server": "Adjust",
  "google-analytics-mcp-server": "Google Analytics 4",
  "google-search-console-mcp-server": "Google Search Console",
};
const FEED_SIZE = 12;
const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

async function github(path, raw = false) {
  const response = await fetch(`https://api.github.com${path}`, {
    redirect: "error",
    headers: {
      Accept: raw ? "application/vnd.github.raw+json" : "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`GitHub ${path}: HTTP ${response.status}`);
  return raw ? response.text() : response.json();
}

const longDate = (iso) => {
  const date = new Date(iso);
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
};

// Older release names used a dash between version and title.
const releaseName = (release) => (release.name || release.tag_name).replace(/\s+[–—-]\s+/, ": ");

function replaceBlock(text, name, body) {
  const start = `<!-- ${name}:start -->`;
  const end = `<!-- ${name}:end -->`;
  const from = text.indexOf(start);
  const to = text.indexOf(end);
  if (from === -1 || to < from) throw new Error(`profile/README.md needs ${start} and ${end}.`);
  return `${text.slice(0, from + start.length)}\n${body}\n${text.slice(to)}`;
}

const servers = [];
const feed = [];
for (const [repo, name] of Object.entries(NAMES)) {
  const card = await github(`/repos/${ORG}/${repo}/contents/server-card.json`, true);
  if (card === null) continue;
  const tools = JSON.parse(card).tools ?? [];
  const writes = tools.filter((tool) => tool.annotations?.readOnlyHint === false).length;
  const releases = ((await github(`/repos/${ORG}/${repo}/releases?per_page=20`)) ?? [])
    .filter((release) => !release.draft && !release.prerelease);
  for (const release of releases) feed.push({ repo, name, release });
  servers.push({ repo, name, reads: tools.length - writes, writes, latest: releases[0] ?? null });
}

const reads = servers.reduce((sum, server) => sum + server.reads, 0);
const writes = servers.reduce((sum, server) => sum + server.writes, 0);
const serverLines = [
  `Our Apache 2.0 packages expose **${reads + writes} tools: ${reads} reads and ${writes} optional writes** across ${servers.length} standalone catalogs.`,
  "",
  "| Server | Read tools | Write tools | Latest release | Package |",
  "| --- | ---: | ---: | --- | --- |",
  ...servers.map((server) => {
    const repoUrl = `https://github.com/${ORG}/${server.repo}`;
    const release = server.latest
      ? `[${server.latest.tag_name}](${server.latest.html_url}) · ${longDate(server.latest.published_at)}`
      : "Not released yet";
    return `| [${server.name}](${repoUrl}) | ${server.reads} | ${server.writes} | ${release} | [npm](https://www.npmjs.com/package/@getmcpads/${server.repo}) |`;
  }),
];

feed.sort((a, b) => b.release.published_at.localeCompare(a.release.published_at));
const feedLines = [
  "| Date | Server | Release |",
  "| --- | --- | --- |",
  ...feed.slice(0, FEED_SIZE).map(({ repo, name, release }) =>
    `| ${longDate(release.published_at)} | [${name}](https://github.com/${ORG}/${repo}) | [${releaseName(release)}](${release.html_url}) |`),
];

const path = new URL("../profile/README.md", import.meta.url);
let readme = readFileSync(path, "utf8");
readme = replaceBlock(readme, "servers", serverLines.join("\n"));
readme = replaceBlock(readme, "releases", feedLines.join("\n"));
writeFileSync(path, readme);
console.log(`Profile refreshed: ${servers.length} servers, ${Math.min(feed.length, FEED_SIZE)} releases in the feed.`);
