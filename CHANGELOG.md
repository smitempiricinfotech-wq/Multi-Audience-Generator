# Changelog

## v2.0.0 - 2026-07-17

Compared range: v1.4.0 (35e8d26eeaa7651286b2f2240486406525e21127) to main 3cc24ccf68fcdbdb13fcea23ee5172e270052a5c.
Version calculation: v1.4.0 -> v2.0.0 because the shipped range contains breaking changes in #5, #6, and #15.

### Breaking Changes
- #5 feat!: new auth token response, drops legacy fields: POST /login no longer returns legacyToken or expiresAt. Clients must use token, tokenType, and issuedAt.
- #6 feat: bulk export endpoint: GET /v1/export was removed and replaced by POST /v2/exports/bulk. The new response contains exportId, status, format, and links.status. Run the export migration and update clients before upgrading.
- #15 misc updates: POST /cart/items now adds updatedAt to its response. Clients with strict closed response schemas, generated clients, or exact contract tests must allow the field before upgrading.

### Features
- #2 feat: add saved carts to storefront API: added POST /saved-carts and GET /saved-carts/:savedCartId so carts can be saved and restored.

### Bug Fixes
- #3 fix: correct tax rounding at checkout: tax now rounds to the nearest cent instead of flooring.
- #11 fix: handle null shipping address: checkout quotes no longer crash when shippingAddress is missing or null.
- #12 feat: add referral rewards: added POST /referral-rewards to apply referral credit. Classified as a bug fix because the PR's bug label controls; the title/body conflict is logged below.

### Performance Improvements
- #4 perf: cache category tree for faster listings: category tree responses are cached instead of rebuilt on every request.

### Internal
- #7 refactor: restructure logging module: logger refactor with no user-facing behavior change.
- #8 chore(ci): bump Node to 20 in CI: CI/tooling update only.
- #9 test: add cart service coverage: tests only; runtime behavior unchanged.
- #10 docs: expand API README: documentation-only update.

### Reverted, Not Shipped
- #13 feat: add live chat widget: added GET /live-chat/widget, then was fully reverted by #14 before release.
- #14 Revert "feat: add live chat widget": explicitly reverted #13 in the same range. Both are excluded from shipped notes and version calculation.

### Classification Notes
- 14 merged PRs were reviewed in the range.
- 12 shipped PRs are included above.
- 2 PRs were reverted and not shipped (#13 and #14).
- 0 PRs are unclassified.
- #6 carried a feature label, but the strict breaking-change test overrides it because the PR removes a public endpoint, changes the response shape, and requires a migration.
- #12 carried a bug label while its feat title/body describe a new referral endpoint. Per the evidence order, it remains a bug fix.
- #15 had no useful label, prefix, or body detail. Its diff changes the public POST /cart/items response shape, so it is a breaking change.

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
