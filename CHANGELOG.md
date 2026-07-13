# Changelog

## v2.0.0 - 2026-07-13

Compared range: v1.4.0 (35e8d26eeaa7651286b2f2240486406525e21127) to main 3cc24ccf68fcdbdb13fcea23ee5172e270052a5c.
Version calculation: v1.4.0 -> v2.0.0 because breaking changes were found in #5, #6, and #15.

### Breaking Changes
- #15 misc updates: POST /cart/items response shape now includes updatedAt. Update strict response schema validators, generated clients, or contract tests before upgrading.
- #6 feat: bulk export endpoint: GET /v1/export was removed and replaced by POST /v2/exports/bulk. The export response now returns exportId, status, format, and links.status. Run the export migration before upgrading clients.
- #5 feat!: new auth token response, drops legacy fields: POST /login no longer returns legacyToken or expiresAt; clients must use tokenType and issuedAt.

### Features
- #2 feat: add saved carts to storefront API: added POST /saved-carts and GET /saved-carts/:savedCartId so carts can be saved and restored.

### Bug Fixes
- #12 feat: add referral rewards: added POST /referral-rewards to apply referral credits. Classified as bug fix because the PR label is bug; title/body conflict is logged in the technical release notes.
- #11 fix: handle null shipping address: checkout quotes no longer crash when shippingAddress is missing or null.
- #3 fix: correct tax rounding at checkout: checkout tax now rounds to the nearest cent instead of flooring.

### Performance Improvements
- #4 perf: cache category tree for faster listings: category tree responses are cached so listings avoid rebuilding the same tree on every request.

### Internal
- #10 docs: expand API README: README documentation update only.
- #9 test: add cart service coverage: tests only.
- #8 chore(ci): bump Node to 20 in CI: CI/tooling update only.
- #7 refactor: restructure logging module: logger refactor with no user-facing behavior change.

### Reverted, Not Shipped
- #14 Revert "feat: add live chat widget": reverted #13 in the same range.
- #13 feat: add live chat widget: added GET /live-chat/widget but was reverted before release.

### Classification Notes
- 14 merged PRs were reviewed in the range.
- 12 shipped PRs are included above.
- 2 PRs were reverted and not shipped (#13 and #14).
- 0 PRs are unclassified.

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
