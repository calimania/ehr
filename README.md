# Calima Sanar EHR - Medplum Dashboard Fork

Welcome to the **Calima Sanar EHR** project!

The following project is a medplum interface.

![Sanar logo](./static/img/sanar.calima.png)

Supports the [medplum api](https://api.medplum.com/), in the enterprise plans and self-hosted versions.

Using Vite to create a static dashboard, for a quick look into medplum.

## Open source.

Released under (TSL).

Read [LICENSE](./LICENSE).

Explore some features in our demo version [sanar.calimania.org](https://sanar.calimania.org).

## 🌟 Features

- **Custom Branding**: Change logos and other visual elements to match your needs.
- **Cloud Ready**: Easily deployable on any cloud provider.
- **Extended Functionality**: Additional features and enhancements for seamless healthcare operations.
- **Environment Config**: Connect effortlessly to your existing Medplum dashboard using the `.env` file.

We build with:
- **Vite**
- **Jest**
- **Babel**
- **Typescript**
- **Mantine 7**
- **Medplum 3**

## ❤️ Open Source Interoperability

At **Calima Sanar**, we believe in the power of **open source** and **interoperability**. We're passionate about creating a **healthtech ecosystem** that thrives on collaboration and innovation.

We love **Medplum** and all the work they've done to advance healthcare solutions. Our goal is to build tools that expand upon their great foundation to create a more connected, flexible, and powerful EHR solution.

## Links

> A curar a la curanderia

[Kalima Health Homepage](https://kalima.health/)

[Calima EHR](https://ehr.caliman.org)

[Medplum Docs](https://www.medplum.com/docs)

[HIPAA with Digital Ocean](https://www.digitalocean.com/trust/hipaa-at-do)

[HIPAA Compliance with AWS](https://aws.amazon.com/compliance/hipaa-compliance/)

# Medplum App

This is the code for [https://app.medplum.com](https://app.medplum.com)

## Deployment

Medplum publishes the app package with placeholders for configuration settings. You can use the Medplum CLI to deploy the app, which will automatically replace the placeholders with your settings.

For example:

```bash
# Deploy the latest version of the app to your Medplum AWS environment named "staging"
medplum aws deploy-app staging
```

## Config Settings

When deploying from the Medplum CLI, config settings are loaded from the corresponding JSON config file.

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

For more information, refer to the [Developer Instructions](https://www.medplum.com/docs/contributing/run-the-stack).

# LICENSE

Available under the [TSL](./LICENSE) license.
