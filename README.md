PluginStore
===
The Official Pengu Plugin Store.

### Features
- [x] Nuxt3 design, powered by [SolidStart].
- [x] Awesome collection of plugins and themes.
- [ ] Easy installation with a single click.

## Developing

> You have to learn [SolidJS](https://www.solidjs.com/) and [SolidStart](https://start.solidjs.com/getting-started/what-is-solidstart) to contribute to this project.

> Also **NodeJS 16+** and **pnpm** are required to build and run this project.

Before you start, let's create an `.env` file with your GitHub's personal access token.

```
GITHUB_PAT="your-token"
```

Then install dependencies and start development:

```
pnpm install
pnpm dev
```

To add a new plugin, just update the `registry/plugins.yml`
```yaml
plugins:
  ...
  - name: Your awesome plugin
    slug: your-awesome-plugin
    description: ...
    # should follow the existing plugins
  ... 
```

## Building

Build production:

```
pnpm build
```

Run production:

```
pnpm start
```

## Deploying

### Vercel

Check out this guide: https://vercel.com/guides/deploying-solid-with-vercel

### Deno Deploy

To deploy on Deno Deploy, you have to install [Deno](https://deno.land/) and [deployctl](https://github.com/denoland/deployctl).

1. Add your Deno Deploy token to `.env`

```
DENO_DEPLOY_TOKEN="your-token"
```

2. Create a new project with name "plugin-store" and run:

```
pnpm build --deno
pnpm run deploy
```
