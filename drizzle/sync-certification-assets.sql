-- Reproducible data sync for the certificate evidence assets.
-- Safe to run repeatedly after the certifications table exists.
-- The public CDN URLs keep the portfolio compatible with Manus and external hosts.

UPDATE certifications
SET imageUrl = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663669412242/ciAKycJhbuviYTan.png'
WHERE id = 1;

UPDATE certifications
SET imageUrl = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663669412242/XgLGgYkhhrokGhCq.png'
WHERE id = 2;

UPDATE certifications
SET imageUrl = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663669412242/ODRdVFsjPTbzYRzO.png'
WHERE id = 3;
