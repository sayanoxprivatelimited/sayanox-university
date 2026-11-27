# Public certificate issuance: proposed guest model (not deployed)

The requested outcome is one certificate per completed intermediate path and a
second award when all paths in a defined programme are complete. A public URL
should identify a real Sayanox University issuance record for sharing on LinkedIn
or X. These features do not exist yet. The current `verify/` page only checks
local ID format; never present it as proof of issuance. Existing `SU-` local
records must not be promoted to verified records solely because an ID matches.

The selected model is guest-first: no login and progress is self-reported. Even
if a public record confirms that Sayanox issued it, it cannot independently prove
who the person is, whether the learner completed the work, mastery, proctoring or
accreditation. A browser completion flag can be changed or fabricated; the
server must not claim otherwise. Public pages and certificates must say this.

Before implementation/release:

1. Provision durable storage and an HTTPS service on an approved stable origin.
   Decide operational owner, spend limits, retention, backups, monitoring and
   restore/revocation procedures. A local-only D1 prototype is not production.
2. Give every path and programme a stable ID and curriculum version. Define
   which lessons count for each version; freeze the programme membership for an
   issued record so future course additions do not silently rewrite history.
3. Record a cryptographically random issuance ID, issuer, display name, award ID,
   curriculum version, issuance time and status. The verification endpoint must
   look up the exact record, return unknown for missing IDs, distinguish revoked
   records, and never accept client-provided titles as authority.
4. Obtain explicit consent before publicly publishing a name and award details.
   Provide a way to request correction or revocation and define how a guest proves
   control of their record without making public IDs into edit credentials. Do
   not place management secrets in public URLs, social shares, logs or backups.
5. Protect issuance and lookup from automated abuse and denial of service with
   suitable server-side validation, size limits, durable rate limiting, abuse
   monitoring and an approved challenge mechanism. Use parameterized queries and
   appropriate origin/CSRF, CSP and cache controls. Review this design before
   exposing a public endpoint; do not rely on client-side checks as authorization.
6. Create a shareable stable HTTPS verification URL only after successful server
   issuance. LinkedIn and X share actions should encode that public URL and avoid
   sending management tokens or private data. Social platforms may show previews
   or prompt the user to log in; the site cannot guarantee a post or badge.
7. Test issuance, lookup, unknown IDs, invalid inputs, consent, revocation,
   concurrent requests, rate limits, storage failures and real deployment paths.
   Update privacy and terms to describe public data, retention and third-party
   sharing. Verify that the live URL works independently in a fresh browser.

The local-only prototype now permits test issuance for the intermediate paths
and the programme label; it still does not check completion or freeze programme
membership, and is not production-ready. No real personal data or tokens should
be used with `prototype/cloudflare/`.
