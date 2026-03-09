# TODO

## Environment Variables Needed

### `DATABASE_URL` — PlanetScale database connection
Required for real page view tracking and guestbook functionality. Currently stubbed with random data.

| Feature | File | Line | Status |
| --- | --- | --- | --- |
| Page views (all posts) | `pages/api/views/index.ts` | L25 | Stubbed |
| Page views (per slug) | `pages/api/views/[slug].ts` | L14 | Stubbed |
| Blog views total | `lib/metrics.tsx` | L8 | Stubbed |
| Guestbook API | `pages/api/guestbook.ts` | L3 | Not stubbed — will error |
| Guestbook page | `app/guestbook/page.tsx` | L9 | Not stubbed — will error |
| DB client | `lib/planetscale.ts` | L25 | Connects via `DATABASE_URL` |

### `OAUTH_CLIENT_KEY` / `OAUTH_CLIENT_SECRET` — GitHub OAuth
Required for guestbook sign-in (NextAuth GitHub provider).

| Feature | File | Line |
| --- | --- | --- |
| NextAuth config | `pages/api/auth/[...nextauth].ts` | L7–L8 |

### `TWITTER_API_TOKEN` — Twitter API v2 bearer token
Optional. Used for embedded tweets (`StaticTweet`) and tweet count on homepage.

| Feature | File | Line | Status |
| --- | --- | --- | --- |
| Fetch tweets | `lib/twitter.ts` | L28 | Graceful fallback (returns `[]`) |
| Tweet count | `lib/metrics.tsx` | L22 | Returns `0` if missing |

### `GITHUB_TOKEN` — GitHub personal access token
Optional. Used to show star count on homepage.

| Feature | File | Line | Status |
| --- | --- | --- | --- |
| Star count | `lib/metrics.tsx` | L41 | Currently commented out in UI |
