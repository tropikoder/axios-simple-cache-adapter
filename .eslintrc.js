module.exports = {
    root: true,
    extends: ['@sprylab/eslint-config'],
    parserOptions: {
        project: './tsconfig.json',
    },
    ignorePatterns: ['*.shim.d.ts'],
};
