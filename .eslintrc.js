module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
    },
    env: {
        browser: true,
    },
    extends: [
        'plugin:vue/recommended',
    ],
    plugins: [
        'vue',
    ],
    rules: {
        'nenerator-start-spacing': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'semi': ["error", "never"],
        'no-unsafe-finally': 0,
        'no-return-assign': 0,
        'comma-dangle': ['error', "always-multiline"],
        'space-before-function-paren': ['error', 'never'],
        'space-before-blocks': ['error', 'never'],
        'keyword-spacing': ['error', { before: true, after: true}],
    },
};