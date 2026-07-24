# Changelog

## v2.0.0 - 2026-07-24

Compared range: `v1.4.0` (`35e8d26eeaa7651286b2f2240486406525e21127`) to `main` (`3cc24ccf68fcdbdb13fcea23ee5172e270052a5c`).

Version decision: `v1.4.0` -> `v2.0.0`. Major bump because the shipped range contains breaking changes in #5, #6, and #15.

### Breaking Changes - Action Required

- **#5 feat!: new auth token response, drops legacy fields** - `POST /login` removes `legacyToken` and `expiresAt` and returns `token`, `tokenType`, and `issuedAt`. Update login response types and parsing before rollout; do not rely on the removed fields.
- **#6 feat: bulk export endpoint** - Removes `GET /v1/export`; `POST /v2/exports/bulk` now returns HTTP 202 with `exportId`, `status`, `format`, and a status link. Run the export migration, move clients to the new endpoint, and handle the queued response.
- **#15 misc updates** - Adds `updatedAt` to the `POST /cart/items` response shape. Update strict cart response schemas and types to accept `updatedAt`, and verify clients that reject unknown fields.

### Features

- **#2 feat: add saved carts to storefront API** - Adds `POST /saved-carts` and `GET /saved-carts/:savedCartId` so carts can be persisted and restored.
- **#12 feat: add referral rewards** - Adds `POST /referral-rewards` to apply a referral credit and return the customer credit and balance.

### Bug Fixes

- **#3 fix: correct tax rounding at checkout** - Rounds tax to the nearest cent instead of flooring it.
- **#11 fix: handle null shipping address** - Prevents checkout from crashing when `shippingAddress` is null or missing by safely defaulting the region.

### Performance Improvement

- **#4 perf: cache category tree for faster listings** - Caches the category-tree response instead of rebuilding it on every request.

### Internal

- **#7 refactor: restructure logging module** - Centralizes logger context handling with no user-facing behavior change.
- **#8 chore(ci): bump Node to 20 in CI** - Runs CI build and test jobs on Node 20.
- **#9 test: add cart service coverage** - Adds cart-service test coverage without changing runtime behavior.
- **#10 docs: expand API README** - Expands endpoint and response documentation only, with no runtime behavior change.

### Reverted, Not Shipped

- **#13 feat: add live chat widget** and **#14 Revert "feat: add live chat widget"** cancel each other completely and are excluded from the 12 shipped changes above.

Coverage: 14 merged PRs reviewed; 12 shipped PRs included; 2 reverted PRs excluded; 0 unclassified PRs.

## v1.4.0 - 2026-07-01

### Added
- Added baseline storefront API coverage for login, cart, checkout, exports, and category listings.
- Prepared release-note workflow fixtures for multi-audience generation.

### Fixed
- Included the checkout patch that guards against negative subtotals.

### Internal
- Normalized TypeScript project configuration for release-history tests.

## v1.3.0 - 2026-06-10

### Added
- Introduced the storefront API skeleton.
- Added checkout quote and cart item routes.

### Fixed
- Normalized seed catalog categories for listing pages.
