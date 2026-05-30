# Cv2026

## App

This is an interactive app, made with Angular 21, to display my resume as a front-end developer

## Tech stack for this project

- Angular 21 (SSG)
- Tailwind CSS v4
- Docker + Nginx Alpine
- GitHub Actions CI/CD
- Let's Encrypt (HTTPS)

## Build

```bash
npm install
npm run build
```

The build generates the static files in `dist/cv2026/browser/` via Angular SSG (`outputMode: "static"`).

## Deploy

The site is automatically deployed via GitHub Actions each time it is pushed to `main`.

### Infrastructure

- **VPS** : Scaleway Ubuntu 24.04
- **Server** : Nginx (Alpine) via Docker
- **HTTPS** : Let’s Encrypt (Certbot), auto-renewable certificate
- **CI/CD** : GitHub Actions

### Pipeline

1. Build of the Docker image (Angular SSG + Nginx)
2. Transfer of the image to the VPS via SCP
3. Restarting the container with the SSL certificates mounted in volume
