# Local-only Cloudflare/D1 experiment

This is **not a deployed product or production authentication**. The public
static site does not call this API. It still has no accounts, cloud sync or
issuer lookup, and existing certificates remain local self-reported keepsakes.
The worker intentionally rejects non-loopback HTTP URLs and runs only with the
`DEV_ONLY=true` binding. Bind to **127.0.0.1 only**: host-header checks alone do
not protect a server exposed to the internet. Do not publish it, route it through
a tunnel, or put real user data or credentials in it.

This isolated prototype exercises a Worker and local D1 with no Cloudflare
account or paid service. It demonstrates:

- An ephemeral bearer-key account: a 256-bit random key is returned once and
  only its SHA-256 hash is stored. There is no login, recovery, expiry, key
  rotation or multi-device session management. It is a throwaway test credential,
  not a replacement for audited authentication.
- A private backup snapshot with revision compare-and-swap to prevent a stale
  device silently overwriting newer data. Backups are **not encrypted**. The
  server validates size and key structure only; a future client must also run
  full version and content validation before replacing local progress. The
  request limit is 128 KiB including JSON, lower than the current 8 MiB local
  export limit; notes and code drafts are also limited to 20,000 characters each. Conflicts require a person to decide what to keep; no merge exists.
- A public, consent-gated test issuance record under a distinct `SUP-` ID. It
  reports only that this local prototype created the record. It does not prove
  identity, completion, mastery, proctoring or accreditation. Anyone with a test
  key can request a record; there is **no assessment**. Record name and course
  are public to anyone with the ID. Test awards also include each of the seven
  intermediate paths and an all-path programme label. The API accepts a
  self-reported claim and does not check completion or freeze curriculum versions. Deleting the test account removes its backup,
  token and records. Deletion from future real systems would also need backup and
  retention procedures.

## Run locally

Requires Node 22. Miniflare is a development dependency, not loaded by the site.
Run from the repository root:

```sh
npm ci --prefix prototype/cloudflare --ignore-scripts --no-audit --no-fund
node tests/cloudflare-prototype.cjs
node prototype/cloudflare/test-d1.cjs
node prototype/cloudflare/local-server.cjs
```

The server binds `127.0.0.1:8787`, uses an ephemeral in-memory database and
loses all data when stopped. Its local-only key has full access to its account;
never log or share it. In a second terminal, use an HTTP client on the **same
machine**. All data is disposable test data:

| Method and path | Body or header | Result |
| --- | --- | --- |
| `POST /api/dev/accounts` | none | Create throwaway account; one-time `token` |
| `GET /api/dev/backup` | `Authorization: Bearer <token>` | Current `revision` and backup or `null` |
| `PUT /api/dev/backup` | bearer; JSON `{ "revision": 0, "backup": { "format": "sayanox-learning-backup", "version": 1, "data": {} } }` | New revision, or 409 if stale |
| `POST /api/dev/certificates` | bearer; JSON `{ "studentName": "Test Student", "courseId": "python", "publicConsent": true }` | Local public record ID (maximum twelve per account) |
| `GET /api/dev/certificates/SUP-...` | none | Public test record and its limitations |
| `DELETE /api/dev/account` | bearer | Remove local account and test records |

JSON mutations require `Content-Type: application/json`. Requests with another
Origin, query strings, or non-local URL are rejected. Responses are `no-store`.
Do not place bearer keys in URLs, backups, screenshots, logs or shell history.

## Gates before any real rollout

This code is deliberately insufficient for public deployment. First agree on
Cloudflare access, budget/quotas, account and recovery model, encryption and
privacy/retention, and obtain a security review. Production requires at least:
trusted authentication and session lifecycle; rate limiting and anti-abuse for
account creation, sync and certificate lookup; schema/version validation and
migration; secure browser integration and CSRF/CORS/CSP review; backup and
recovery; user-consented data transfer and deletion; operational monitoring,
cost controls and rollback; and end-to-end testing of the actual deployment.
The public API must clearly separate lookup of a **platform-issued record** from
proof of learner identity, completion or accreditation. Never convert existing
locally generated `SU-` IDs into verified records merely because they match a
format. A future rollout also needs an explicit policy on public names, revocation
and correction, and updates to the site's privacy and terms pages.
