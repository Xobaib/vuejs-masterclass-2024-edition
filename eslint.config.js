import pluginVue, { rules } from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
  {
    rules: {
      'vue/multi-word-component-names': 0,
    },
  },
  //   {
  //     "rules": {
  //         "no-unused-vars": ["error", {
  //             "vars": "all",
  //             "args": "after-used",
  //             "caughtErrors": "all",
  //             "ignoreRestSiblings": false,
  //             "reportUsedIgnorePattern": false
  //         }]
  //     }
  // },
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,
];
