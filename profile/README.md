# Get MCP Ads

**Open-source MCP servers for the advertising stack.**

Six [Model Context Protocol](https://modelcontextprotocol.io) servers that connect Claude,
ChatGPT, Cursor or any MCP client to the platforms where advertising actually happens. Run
them yourself under Apache 2.0, with your own credentials, on your own machine.

| Server | Tools | Install | Registry |
|---|---|---|---|
| [Meta Ads](https://github.com/getmcpads-com/meta-ads-mcp-server) | 34 read + 10 write | `@getmcpads/meta-ads-mcp-server` | `com.getmcpads/meta-ads` |
| [Google Ads](https://github.com/getmcpads-com/google-ads-mcp-server) | 31 read + 7 write | `@getmcpads/google-ads-mcp-server` | `com.getmcpads/google-ads` |
| [TikTok Ads](https://github.com/getmcpads-com/tiktok-ads-mcp-server) | 27 read + 5 write | `@getmcpads/tiktok-ads-mcp-server` | `com.getmcpads/tiktok-ads` |
| [Pinterest Ads](https://github.com/getmcpads-com/pinterest-ads-mcp-server) | 26 read + 5 write | `@getmcpads/pinterest-ads-mcp-server` | `com.getmcpads/pinterest-ads` |
| [Google Analytics 4](https://github.com/getmcpads-com/google-analytics-mcp-server) | 27 read | `@getmcpads/google-analytics-mcp-server` | `com.getmcpads/google-analytics` |
| [Google Search Console](https://github.com/getmcpads-com/google-search-console-mcp-server) | 20 read | `@getmcpads/google-search-console-mcp-server` | `com.getmcpads/google-search-console` |

```bash
npx -y @getmcpads/meta-ads-mcp-server
```

## What these have in common

**Writes preview before they apply.** On the four ad platforms, every write tool returns a
description of the change and does nothing. Only a second call carrying `confirm: true`
touches the live account. An assistant can pick the wrong account or the wrong order of
magnitude on a budget; a mandatory preview makes that visible before it costs money.

**Analytics servers cannot write at all.** No flag adds it. A misread report is a wrong
answer you can spot. A mistaken write to an analytics property corrupts the record you use
to judge everything else, silently.

**Catalogues live in the server, not in the model.** Metric and dimension catalogues with a
compatibility matrix, so an assistant asks for `cost` and `conversions` by name instead of
composing a query language against a schema of thousands of fields.

**Honest comparisons.** Each README compares the server to the platform's own official MCP
server, including the rows where the official one wins. Where no official server exists, we
say that instead of inventing a comparison.

**Credentials stay on your machine.** No telemetry, no phone-home, one allowed host per
server, and no HTTP redirect is ever followed once a token is attached. Tests fail the build
if any of that stops being true.

## Prefer not to run them yourself?

[**getmcpads.com**](https://www.getmcpads.com) is the hosted version: the same six servers
behind a single endpoint, with hosted OAuth and cross-platform reporting.

Same tools, same safety model, no setup. The open-source servers stay independently useful
either way.

## Licence

Apache 2.0, every repository. Meta, Google, TikTok and Pinterest are trademarks of their
respective owners; these projects are independent clients of public APIs and are not
affiliated with, endorsed by, or sponsored by any of them.
