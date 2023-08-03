module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `@/eslint-config-custom`
    extends: ['@/eslint-config-custom'],
    settings: {
        /*
            https://nextjs.org/docs/app/building-your-application/configuring/eslint#custom-settings
            tell eslint-plugin-next where your Next.js app is
        */
        next: {
            rootDir: ['apps/web/']
        }
    }
};
