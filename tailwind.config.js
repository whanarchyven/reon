module.exports = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx,}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'title': ['Another Danger Slanted', 'system-ui'],
      'desc':['BioRhyme','sans-serif'],
      'bars':['Beer Money','sans-serif'],
      'jost':['Jost','sans-serif'],
    },
    colors: {
      button: "#AA966B",
      reon: "#FBF9E8",
      white:'#FFFFFF',
    },
  },
  plugins: [],
}