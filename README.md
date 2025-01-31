# 🏡 Cottage

Cottage is a **React-based** web application designed for a modern and efficient frontend experience. Built with **Vite**, **ESLint**, and **styled-components**, this project ensures fast performance and clean code quality.

---

## 🚀 Features

- ⚡ **Fast Development** - Uses Vite for optimized builds.
- 🎨 **Styled Components** - Modular styling with styled-components.
- ✅ **Linting & Formatting** - ESLint configured for code consistency.
- 🏗️ **Modular Structure** - Organized codebase for scalability.

---

## 🏗️ Project Structure

```
.
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── [Various icons & images]
├── src
│   ├── App.jsx           # Root component
│   ├── data/             # Static and API-related data
│   ├── features/         # Feature-based components
│   ├── hooks/            # Custom React hooks
│   ├── main.jsx          # Application entry point
│   ├── pages/            # Page-level components
│   ├── services/         # API and service integrations
│   ├── styles/           # Global and component styles
│   ├── ui/               # Reusable UI components
│   └── utils/            # Utility functions
├── vite.config.js        # Vite configuration
```

---

## 📦 Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd cottage
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   ```

---

## 🛠️ Built With

### **Frontend**

- [React 18](https://react.dev/) - UI framework
- [Styled Components](https://styled-components.com/) - Styling solution
- [Vite](https://vitejs.dev/) - Fast build tool

### **Development Tools**

- [ESLint](https://eslint.org/) - Linter for maintaining code quality

---

## 📜 Scripts

The following scripts are available:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview"
}
```

- `npm run dev` → Start development server
- `npm run build` → Build production files
- `npm run lint` → Check for linting issues
- `npm run preview` → Preview production build

---

## 📌 Configuration

### **Vite Config (`vite.config.js`)**

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
});
```

### **ESLint Configuration (`.eslintrc.js`)**

```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 'warn',
    'react/prop-types': 'warn',
  },
};
```

---

## 🎯 Future Improvements

- 🌟 Add authentication (e.g., Firebase, Auth0)
- 🚀 Implement backend API (Node.js, Express, or Firebase)
- 📱 Improve mobile responsiveness
- 🎨 Enhance UI/UX with animations & transitions

---

## 📄 License

This project is **MIT Licensed**. Feel free to modify and use it as needed!

---

## 💬 Feedback & Contributions

We welcome contributions! Feel free to fork, submit PRs, or report issues.

Happy coding! 🚀
