# Multi-Audience Generator

Mock storefront service used to seed release-note workflow tests.

## API surface

- `POST /login` returns `token`, `tokenType`, and `issuedAt`.
- `GET /v1/export` returns a synchronous export payload.
- `POST /cart/items` adds an item to a cart.
- `POST /checkout/quote` calculates taxes and totals.
- `GET /categories/tree` returns category data for storefront listings.
- `POST /saved-carts` persists a cart for later recovery.
- `GET /saved-carts/:savedCartId` restores a saved cart.
