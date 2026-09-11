# Certification Query Fix Notes

The published API was responding correctly during diagnosis, but the client had no retry policy and rendered a blocking unavailable message whenever a transient query failure occurred. The fix adds bounded React Query retries and a verified fallback set containing the IIRS–ISRO, Cisco Ethical Hacker, and Cisco Introduction to Cybersecurity records. All three fallback image URLs use verified public CDN assets.

Vitest, TypeScript checking, and the production build pass. Fresh desktop and mobile previews render the full portfolio layout with the certification section present; the section now remains usable even when the live certification query temporarily fails.
After expanding the fallback to mirror all 10 current database records, fresh desktop and mobile previews completed without build or type errors. The fallback preserves the IIRS–ISRO featured record first and keeps both Cisco image-backed records available even during a transient query outage.
