# Contentful Platform

```
Contentful
├── Contentful-frontend  (Next.js/React web app)
├── Contentful-backend  (NestJS API backend)
├── platform-interface  (TypeScript libraries common for both frontend and backend, must not refer to NestJS or React)
   


```

## Prerequisites

- NodeJs 16+
- Yarn 3.2.3+
- Docker (Docker Desktop)

## For Docker on Mac

Please enable the following features to speed up your local development environment.

- Enable Enable VirtioFS accelerated directory sharing( please read https://www.docker.com/blog/speed-boost-achievement-unlocked-on-docker-desktop-4-6-for-mac/)
- Increase default resources for docker engines (Docker preferences/engine)

## Bootstrap (run once only)

```sh
# Set node and yarn versions
nvm install 16
nvm use
yarn set version berry

# Bootstrap tools and libs
yarn
yarn bootstrap

yarn lint
yarn test

```
