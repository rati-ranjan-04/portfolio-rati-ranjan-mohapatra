# Certificate Visualisation Fix Notes

The original visualisation problem was traced to the database returning `/manus-storage/...` paths for the Cisco images. Those paths depend on the Manus storage proxy and are unsuitable as the only asset URL for external deployment. The two certificate files were uploaded to verified public CDN URLs, and the database now returns those URLs for both Cisco records.

The local and published tRPC responses return the Cisco records and public CDN URLs. Unit tests and the production build pass. A fresh published-page browser load completed successfully and showed the featured IIRS verification control; the certificate section is below the initial extracted content, so the saved deployed HTML will be searched directly for the exact image sources and titles.
A direct visual inspection of the published page now confirms the fix: the Cisco Ethical Hacker and Cisco Introduction to Cybersecurity cards display their certificate images, titles, Cisco Networking Academy issuer, and completion dates. The card grid is visible in the deployed site; the earlier missing visuals were caused by the Manus-only image paths and a stale browser view.
