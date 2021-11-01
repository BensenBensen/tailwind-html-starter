module.exports = {
    purge: {
        content: [
            "./src/**/*.html"
        ],
        options: {},
    },
    mode: "jit",
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary': '#156DB5',
                },
        
            fontFamily: {
                'overpass': ['overpass', 'system-ui'],
                'ibm': ['IBM Plex Sans', 'system-ui']
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
