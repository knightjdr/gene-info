# Web documentation

## Prerequisites

* Node.js
* http-server

### Install dependencies

```
(cd web-docs && npm install)
```

```
npm install -g http-server
```

### .env file

An `.env` file is required in the `web-docs` directory, specifying the address for the Plausible analytics server.

```
PLAUSIBLE_DOMAIN=https://localhost:8000/js/plausible.js
```

## Development

Start a local development server. This will not hot reload.

```
npm run web-doc-server
```

## Deployment

1. Build the docs
```
npm run web-doc-build
```

2. Deploy the docs to the Github gh-pages branch.
```
npm run web-doc-deploy
```
