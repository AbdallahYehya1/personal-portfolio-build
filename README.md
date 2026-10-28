# Portfolio

## Local development

Install dependencies with `npm install`, then run `npm run dev`.
Copy `.env.example` to `.env.local` and provide the server-only email settings.

## Contact form / Vercel setup

The form posts to `/api/contact`; the server sends the message through Resend.
There is no email-app redirect. Failed sends preserve the visitor's message.

In the existing Vercel project, add these environment variables for Production
(and Preview if testing preview deployments), then redeploy:

- `RESEND_API_KEY`: your Resend API key with sending access.
- `RESEND_FROM_EMAIL`: a sender on your verified Resend domain, e.g. `Portfolio <contact@your-domain.com>`.
- `CONTACT_TO_EMAIL`: defaults to `abdallah.yehya02@gmail.com`.

Do not prefix these with NEXT_PUBLIC_ or commit real credentials.
The visitor's email is used as reply-to, never as the sender.
For the initial test with this portfolio owner's Resend account:
- `RESEND_FROM_EMAIL=onboarding@resend.dev`
- `CONTACT_TO_EMAIL=abdallah.yehya02@gmail.com`

The recipient must match the Resend account email when using this test sender.
Visitors can submit the form with their own reply-to email; the recipient stays fixed.
Use a verified custom domain sender for normal production use.
See https://resend.com/docs/api-reference/emails/send-email.

Verify a real message after deployment in the Resend logs and recipient inbox.
A success response means Resend accepted the email, not guaranteed inbox delivery.

## Validation

- `npx tsc --noEmit`
- `npm run build`
- `node --test tests/contact.test.mjs`

