/* eslint-disable no-console */
console.log('\n==============================================');
console.log('\n🔨 Building: TailwindCSS UI');
console.log('\n==============================================');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'src/**/*.{js,ts,jsx,tsx}'
    ],
    prefix: 'ui-',
    theme: {
        extend: {
            colors: {
                red: {
                    800: 'green'
                }
            }
        }
    },
    plugins: []
};
