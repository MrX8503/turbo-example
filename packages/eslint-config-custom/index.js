module.exports = {
    root: true,
    extends: [
        'turbo',
        'plugin:json/recommended',
        'plugin:@next/next/recommended',
        '@millerknoll-digital/eslint-config-millerknoll-typescript'
    ],
    rules: {
        '@next/next/no-html-link-for-pages': 'off'
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            excludedFiles: 'node_modules',
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: [
                    '../../apps/*/tsconfig.json',
                    '../ui/tsconfig.json'
                ]
            }
        }
    ]
};
