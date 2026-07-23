import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Enables 'describe', 'it', and 'expect' without manual imports
    environment: 'node', // Sets the test environment to Node.js
  },
});
