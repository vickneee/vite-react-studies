# todo-app-with-test-file

Metropolia UAS React.js lab. Todo app with App.test.js file.

To start using Vitest, we have to install it to our project using the following command in your React project folder:

```bash
npm install -D vitest
``` 

To run tests, we should also add npm script to our project's package.json file

```bash
"scripts": {
"dev": "vite",
"build": "vite build",
"test": "vitest",
"lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
"preview": "vite preview"
},
```

To install these libraries, type the following terminal command in the project directory:

```bash
npm install -D jsdom @testing-library/react @testing-library/jest-dom
```

After the installation, we have to add the following configuration to our vite.config.js file:

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
    test: {
    globals: true,
    environment: 'jsdom',
    }
})
```

<img src="./src/assets/test.png" alt="Test png"></a>
