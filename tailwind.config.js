const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
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
            'dark-blue': {
                500: '#45406d',
                900: '#2A2744',
              },
            'blue': '#A6BFFF',
            'pink': '#FFC3C3',
            'red':colors.red,
            'green':colors.green,
            'black':colors.black,
            'gray':colors.gray,
            'teal':colors.teal,
            'slate':colors.slate
        },
    }
    // ...
}