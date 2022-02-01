const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        // Use *.tsx if using TypeScript
        './src/pages/**/*.js',
        './src/components/**/*.js'
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'yellow': '#FED18A',
            'dark-blue': '#2A2744',
            'blue': '#A6BFFF',
            'pink': '#FFC3C3',
            'red':colors.red,
            'green':colors.green,
            'black':colors.black,
            'grey':colors.gray,
            'teal':colors.teal
        },
    }
    // ...
}