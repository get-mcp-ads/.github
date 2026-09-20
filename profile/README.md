<div align="center">

# getmcpads

### Your advertising work, inside your AI assistant.

Analyze performance. Review creatives. Export reports. Prepare campaigns.

[Website](https://www.getmcpads.com) · [Watch the demo](https://www.getmcpads.com/home/film/get-mcp-ads-film-1080p.mp4) · [Documentation](https://www.getmcpads.com/docs) · [Explore the sources](https://www.getmcpads.com/tools)

[![Watch getmcpads: performance analysis and creative comparison inside your AI assistant](https://www.getmcpads.com/home/film/poster-rich.webp)](https://www.getmcpads.com/home/film/get-mcp-ads-film-1080p.mp4)

</div>

## One hosted connection for your advertising work

[getmcpads](https://www.getmcpads.com) connects **14 advertising, analytics and search sources** to compatible AI assistants through a hosted MCP connection. Media buyers, marketers and agencies can move from a performance question to a creative review, a spreadsheet report or a proposed campaign change in the same conversation.

| What you need to do | How getmcpads helps |
| --- | --- |
| Understand performance | Investigate acquisition costs, compare campaigns and prepare reports across connected accounts. |
| Review creatives | Explore a creative gallery and visual comparisons alongside performance data. |
| Retrieve media | Retrieve supported ad images and videos for inspection and reuse. |
| Keep Google Sheets current | Export supported reports to Google Sheets and schedule automatic refreshes. |
| Prepare ads in bulk | Combine a brief with media from Google Drive, Dropbox or supported conversation attachments to prepare batches of ads. |
| Make campaign changes | Preview supported budget, status, targeting and campaign changes before confirming them. |
| Work across clients | Organize workspaces, select accessible accounts and prepare client reviews. |
| Connect advertising to analytics | Bring GA4 and Search Console into acquisition and search performance analysis. |

**The 14 sources:** Meta Ads, Google Ads, TikTok Ads, Pinterest Ads, X Ads, Snapchat Ads, Amazon Ads, Apple Ads, Microsoft Advertising, Reddit Ads, LinkedIn Ads, RTB House, Google Analytics 4 and Google Search Console.

Capabilities vary by source, account permissions, plan and AI client. Bulk creation and scheduled exports are available on supported paid plans. LinkedIn campaign writes currently require test accounts while Standard access is pending. See the [source documentation](https://www.getmcpads.com/tools) and [current plans](https://www.getmcpads.com/pricing) for availability. The demo uses staged data.

[**Explore getmcpads**](https://www.getmcpads.com) · [Read the guides](https://www.getmcpads.com/guides)

## Seven standalone open-source MCP servers

Prefer to run a server with your own credentials? Our Apache 2.0 packages expose **317 tools: 211 reads and 106 optional writes** across seven standalone catalogs.

| Server | Read tools | Write tools | Release | Package |
| --- | ---: | ---: | --- | --- |
| [Meta Ads](https://github.com/getmcpads-com/meta-ads-mcp-server) | 41 | 23 | [2.0.0](https://github.com/getmcpads-com/meta-ads-mcp-server/releases/tag/v2.0.0) | [npm](https://www.npmjs.com/package/@getmcpads/meta-ads-mcp-server) |
| [Google Ads](https://github.com/getmcpads-com/google-ads-mcp-server) | 35 | 10 | [2.0.0](https://github.com/getmcpads-com/google-ads-mcp-server/releases/tag/v2.0.0) | [npm](https://www.npmjs.com/package/@getmcpads/google-ads-mcp-server) |
| [TikTok Ads](https://github.com/getmcpads-com/tiktok-ads-mcp-server) | 35 | 29 | [2.0.0](https://github.com/getmcpads-com/tiktok-ads-mcp-server/releases/tag/v2.0.0) | [npm](https://www.npmjs.com/package/@getmcpads/tiktok-ads-mcp-server) |
| [Pinterest Ads](https://github.com/getmcpads-com/pinterest-ads-mcp-server) | 28 | 25 | [2.0.0](https://github.com/getmcpads-com/pinterest-ads-mcp-server/releases/tag/v2.0.0) | [npm](https://www.npmjs.com/package/@getmcpads/pinterest-ads-mcp-server) |
| [X Ads](https://github.com/getmcpads-com/x-ads-mcp-server) | 25 | 19 | [1.0.0](https://github.com/getmcpads-com/x-ads-mcp-server/releases/tag/v1.0.0) | [npm](https://www.npmjs.com/package/@getmcpads/x-ads-mcp-server) |
| [Google Analytics 4](https://github.com/getmcpads-com/google-analytics-mcp-server) | 27 | 0 | [2.0.0](https://github.com/getmcpads-com/google-analytics-mcp-server/releases/tag/v2.0.0) | [npm](https://www.npmjs.com/package/@getmcpads/google-analytics-mcp-server) |
| [Google Search Console](https://github.com/getmcpads-com/google-search-console-mcp-server) | 20 | 0 | [2.0.0](https://github.com/getmcpads-com/google-search-console-mcp-server/releases/tag/v2.0.0) | [npm](https://www.npmjs.com/package/@getmcpads/google-search-console-mcp-server) |

Each repository includes setup instructions, tool schemas, a changelog and versioned releases. Requires **Node.js 22.12 or newer** and a compatible stdio MCP client.

```bash
npx -y @getmcpads/meta-ads-mcp-server@2.0.0
```

Advertising write tools are disabled by default. When enabled, they preview a change before a call with explicit confirmation applies it. GA4 and Search Console are read-only.

The hosted product adds its own interface and workflows, including creative galleries, scheduled exports, cloud media imports and shared workspaces. These are separate from the standalone packages listed above.

## What is new

- **X Ads 1.0.0:** a seventh standalone server with 25 read tools and 19 optional write tools.
- **Six servers at 2.0.0:** expanded advertising tool catalogs, security fixes and updated dependencies, with Node.js 22.12 as the minimum supported version.
- **Current documentation:** complete tool references, release notes, installation instructions and demo previews in each repository.
- **Broader hosted workflows:** 14 sources, creative galleries, media retrieval, Google Sheets exports and supported bulk ad preparation from Drive or Dropbox.

Open the release links above for the changes in each package. The 317-tool total applies to the seven standalone catalogs, not the hosted product.

## Maintained by Emmanuel

Questions or feedback? Open an issue in the relevant repository or contact [hello@getmcpads.com](mailto:hello@getmcpads.com).

The standalone repositories are licensed under Apache 2.0. Platform names and trademarks belong to their respective owners. These are independent clients of public APIs and are not affiliated with or endorsed by those platforms.
