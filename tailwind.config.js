const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    content: [
        // Use *.tsx if using TypeScript
        './src/pages/**/*.js',
        './src/components/**/*.js'
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'yellow': {
                500: '#FFF0D8',
                900: '#FED18A'
            },
            'dark-blue': {
                500: '#45406d',
                900: '#2A2744',
            },
            'blue': {
                500: '#A6BFFF',
                900: '#2F296D',
            },
            'pink': '#FFC3C3',
            'salmon': {
                500: '#FFD1D1',
                900: '#FF8585'
            },
            'red': colors.red,
            'green': colors.green,
            'black': colors.black,
            'gray': colors.gray,
            'teal': colors.teal,
            'slate': colors.slate
        },
    }
    // ...
}