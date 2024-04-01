# todo-app-with-test-file

Metropolia UAS React.js lab. Todo app with App.test.js file.

![Todo App](./src/assets/to-do-app.png)

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

Now, you can run tests by typing the following terminal command in the project directory:

```bash
npm run test
```

The command finds all test files (.test.js or .test.jsx extension) from your project and run the test cases. By default, it will run in watch mode and re-run the tests each time when code is updated. You can stop watch mode by pressing 'q' in terminal.


If needed installation:

```bash
npm install --save-dev eslint-plugin-jest
```

Here's an example of what your ESLint configuration file might look like after these changes:

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true, // Add this line
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended', // Add this line
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest', // Add this line
  ],
  rules: {
    // Your rules here
  },
};
```

<img src="./src/assets/test.png" alt="Test png"></a>
