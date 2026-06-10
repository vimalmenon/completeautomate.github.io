# Changelog

## [2026-06-10] — Video Fixes & SEO

- **Fixed** — Video structured data now includes timezone info for Google Search Console (`COM-36`)
- **Fixed** — Added missing `uploadDate` to video JSON-LD across all 5 AI Terms blog posts (`COM-22`)

## [2026-06-09] — YouTube Helper

- **Added** — YouTube Helper microservice (`youtube-svc`) for video metadata management (`COM-9`)
- **Added** — Support for OAuth-based Google credentials (ready for upload endpoint)

## [2026-06-08] — MCP-as-a-Service Planning

- **Added** — MCP-as-a-Service story (`Hephaestus`, `COM-23`) — hosting MCP tools over HTTP on k3s
- **Added** — Evaluated 800+ MCP servers from the official MCP Registry

## [2026-06-08] — SEO & Analytics

- **Added** — SEO tracking idea (`COM-20`): Umami + Search Console + Grafana
- **Added** — Keyword research MCP services evaluated (TrendsMCP, SEOCrawl, Exa)

## [2026-06-07] — Site Updates

- **Added** — X/Twitter account link replacing location on contact page (`COM-12`)
- **Fixed** — Contact form now uses correct API endpoint

## [2026-06-06] — LLM Wiki

- **Added** — LLM Wiki microservice (`wiki-svc`) for knowledge management (`COM-8`)
- **Added** — S3 file attachment support for wiki articles

## [2026-06-05] — Infrastructure

- **Added** — PodDisruptionBudgets for critical services (`COM-6`)
- **Added** — Vaultwarden deployment for password management (`COM-13`)
- **Fixed** — Grafana dashboards updated with new service metrics
- **Fixed** — ArgoCD apps/kustomization completed with all missing manifests (`COM-17`)
