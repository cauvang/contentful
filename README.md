# Pedigree Goodpoints Platform

Pedigree Goodpoints Platform Monorepo

```
GOODPOINTS
├── pedigree-goodpoints-frontend  (Next.js/React web app)
├── pedigree-goodpoints-frontend  (NestJS API backend)
├── packages
    └── backend-libs              (TypeScript libraries for backend, can refer to NestJS)
    └── common-libs               (TypeScript libraries common for both frontend and backend, must not refer to NestJS or React)
    └── platform-api-interfaces   (TypeScript interfaces for Platform API)
    └── frontend-libs             (TypeScript library for frontend)



```

# Design Decisions

1. This is a monorepo managed by yarn workspaces. One major benefit of using a monorepo is that it can share dependencies among projects, e.g., [packages/backend-libs](packages/backend-libs), [packages/platform-api-interfaces](packages/platform-api-interfaces).
2. Do not use `npm`. Use `yarn` instead
3. Do not use TypeScript specific features that are not in JavaScript, e.g., `paths`. Because it will require us to configure many tools to understand the non-JS syntax, and it will increase complicity.
4. Never use the [Non-null assertion operator "!"](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator), it is always better to check `null/undefined` before using the variables, which will prevent one of most common JavaScript error: `Cannot access xxx of undefined.`
5. Do not disable eslint rule: `react-hooks/exhaustive-deps`, it will cause bug. Please refer to [React Hook Pitfalls - Kent C. Dodds](https://youtu.be/VIRcX2X7EUk?t=360), [Tips](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects) and [Performance Optimizations](https://reactjs.org/docs/hooks-faq.html#performance-optimizations)
6. Do not set `err` in `catch(err)` to `any`, handle it using [type guard](https://www.typescriptlang.org/docs/handbook/2/narrowing.html). Please refer to [How can I safely access caught Error properties in TypeScript?](https://stackoverflow.com/a/64452744)
7. Do not use `redux`, use [React Hooks](https://reactjs.org/docs/hooks-reference.html) instead. You can still use reducers.
8. Try to find utility functions from [lodash](https://lodash.com/) before writing your own.
9. If you only need types from a package, you can use `import type` to solve the eslint error from `import/no-extraneous-dependencies`, e.g.,

    ```
    import type { TransactionResponse } from '@ethersproject/abstract-provider';
    ```

# Development

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

## Get Started



## Connect to the local database


## Reset local database



## local development commands



# Troubleshoots

Refer to [TROUBLESHOOTS](docs/TROUBLESHOOTS.md)

# Contribution

Our development workflow uses [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/), [Smart Commit](https://confluence.atlassian.com/fisheye/using-smart-commits-960155400.html) and [GitHub Actions](https://github.com/features/actions).

1. Set up your local git. For Smart Commit to work, the email address with git must match the JIRA user email address.

   ```
   git config user.email "your.name@levo.com.au"
   ```

1. To start coding and contribute to this project. Run the following command to set up local git hooks:

   ```yarn
   yarn prepare
   ```

1. Create a feature branch named containting the JIRA ticket. For example:

   ```
   git checkout -b GOOD-124-new-feature-branch-name
   ```

1. Commit your code as with conventional commit message. The local commit git hooks will set your commit message scope with the JIRA ticket id. For example:

   ```
   git commit -m "feat: My first commit message"

   # shows feat(GOOD-123): My first commit message
   git log HEAD^..HEAD

   ```

1. Push your local feature branch to the origin as usual. Create a PR with a title containing the JIRA ticket ID. For example: `GOOD-123: My first PR`

1. CI will check the PR title. Your PR will be reviewed and eventually merged to the 'main' branch.

1. Your feature will be deployed upon the next release cycle.
# contentful
