import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // WebdriverIO globals
        $: 'readonly', // jQuery-like selector for WebdriverIO
        $$: 'readonly', // jQuery-like selector for multiple elements
        describe: 'readonly', // Mocha global
        it: 'readonly', // Mocha global
        before: 'readonly', // Mocha global
        afterEach: 'readonly', // Mocha global
      },
    },
  },
  pluginJs.configs.recommended,
];
