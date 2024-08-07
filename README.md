# Calima EHR

The following project is a medplum interface.

![Sanar logo](./static/img/sanar.calima.png)

Supports the [medplum api](https://api.medplum.com/), in the enterprise plans and self-hosted versions.

Using Vite to create a static dashboard, for a quick look into medplum.

## Open source.

Released under (TSL).

Read [LICENSE](./LICENSE).

Explore some features in our demo version [sanar.calimania.org](https://sanar.calimania.org).

Contact our team for support, custom integrations and enterprise plans.

This project was forked from [medplum/app](https://app.medplum.com)

## Config Settings

When building and running the app from source, config settings are loaded from environment variables or the `.env` file.

| Name                       | Description                                                                                | Required |
| -------------------------- | ------------------------------------------------------------------------------------------ | -------- |
| `MEDPLUM_BASE_URL`         | The base URL of the API server for all API calls. For example, "https://api.medplum.com/". | yes      |
| `CALIMA_BASE_URL`          | The base URL of the API server for all API calls. For example, "https://api.medplum.com/". | no       |
| `MEDPLUM_CLIENT_ID`        | Optional Medplum client application ID.                                                    | no       |
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
