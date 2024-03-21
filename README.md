# github-pages

## Deployment:

[Vite Guide GitHub Pages](https://vitejs.dev/guide/static-deploy.html)

1. Edit vite.config.js file: // vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/firebase-bookstore-app/', // Your repo name
  plugins: [react()],
})
```

2. Edit static.yml file:
   // Workflow file for this run

```yml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ['main']

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload dist folder
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
# Repo resources

[SamUCl](https://github.com/SamUCL)

[gopinav](https://github.com/gopinav)

[lashaNoz](https://github.com/lashaNoz)

[kaizhelam](https://github.com/kaizhelam)

[techaness](https://github.com/techvaness)

[web develpment resouces](https://github.com/markodenic/web-development-resources)

[andrapetrelonela](https://github.com/andrapetronela)



