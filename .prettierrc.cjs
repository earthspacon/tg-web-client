/** @type {import("prettier").Config} */
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  singleQuote: true,
  tabWidth: 2,
  semi: false,
  printWidth: 100,
  endOfLine: 'auto',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '<BUILTIN_MODULES>', // Node.js built-in modules
    '', // empty line
    '<THIRD_PARTY_MODULES>', // Imports not matched by other special words or groups.
    '', // empty line
    '@/app/(.*)$',
    '',
    '@/pages/(.*)$',
    '',
    '@/widgets/(.*)$',
    '',
    '@/features/(.*)$',
    '',
    '@/entities/(.*)$',
    '',
    '@/shared/(.*)$',
    '', // empty line
    '^[./]', // relative imports
  ],
}
