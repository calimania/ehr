# Calima EHR

The following

Built following the guidance from the [medplum app package](https://github.com/calimania/medplum/tree/main/packages/app)

Supports the [medplum api](https://api.medplum.com/), in the enterprise plans and self-hosted versions.

Using NEXTJS to offer API, bot and front end components and extensions.

## Open source.

Released under (TSL). Full [./LICENSE] text.

Explore some features in our demo version [ehr.calimania.org](https://ehr.calimania.org).

Contact our team for support, custom integrations and enterprise plans.

This project was forked from [medplum/app](https://app.medplum.com)

## Config Settings

When building and running the app from source, config settings are loaded from environment variables or the `.env` file.

| Name                       | Description                                                                                | Required |
| -------------------------- | ------------------------------------------------------------------------------------------ | -------- |
| `MEDPLUM_BASE_URL`         | The base URL of the API server for all API calls. For example, "https://api.medplum.com/". | yes      |
| `MEDPLUM_CLIENT_ID`        | Optional Medplum client application ID.                                                    | no       |
| `GOOGLE_CLIENT_ID`         | Optional Google client application ID for Google Auth.                                     | no       |
| `RECAPTCHA_SITE_KEY`       | Optional reCAPTCHA site key for reCAPTCHA user verification.                               | no       |
| `MEDPLUM_REGISTER_ENABLED` | Optional flag to enable or disable open registration for new projects.                     | no       |

## Developing

Dev server:

```bash
npm run dev
```

Production build:

```bash
npm run build
```
