// https://github.com/vercel/turbo/issues/1026
const sharedConfig = require('../../packages/ui/tailwind.config');

module.exports = {
    presets: [sharedConfig],
    content: [
        'src/**/*.{js,ts,jsx,tsx}',
        '../../packages/ui/src/**/*.{ts,tsx}'
    ]
};
