module.exports = {
    root: true,
    extends: [
        '@/eslint-config-custom',
        'plugin:storybook/recommended'
    ],
    ignorePatterns: [
        'storybook-static/**'
    ]
};
