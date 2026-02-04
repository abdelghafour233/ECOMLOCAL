# Souq Maroc - Arabic E-commerce Site

A modern, responsive e-commerce landing page built with React, TypeScript, and Tailwind CSS.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run locally:**
    ```bash
    npm start
    ```

## Deployment Instructions

### Option 1: Vercel (Recommended)

1.  Push this code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com).
3.  Click "Add New..." -> "Project".
4.  Import your GitHub repository.
5.  Framework Preset will be detected automatically (Create React App).
6.  Click **Deploy**.

### Option 2: GitHub Pages

1.  Open `package.json` and add a `homepage` field:
    ```json
    "homepage": "https://yourusername.github.io/repo-name",
    ```

2.  Install `gh-pages`:
    ```bash
    npm install gh-pages --save-dev
    ```

3.  Add these scripts to `package.json`:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build",
      // ... other scripts
    }
    ```

4.  Run the deploy command:
    ```bash
    npm run deploy
    ```

## Form Submission

Currently, the form simulates a submission. To connect to real email notifications:

1.  Go to [Formspree](https://formspree.io/).
2.  Create a new form.
3.  In `components/OrderModal.tsx`, replace the `setTimeout` logic inside `handleSubmit` with a real `fetch` request to your Formspree endpoint.

```typescript
fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  body: JSON.stringify(formData),
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }
}).then(...)
```
