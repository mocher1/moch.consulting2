/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
        'mono': ['DM Mono', 'monospace'],
      },
      colors: {
        'mind-black': '#191918',
        'mind-grid-grey': '#f6f6f7',
        'mind-bg-color': '#000',
        'mind-white': '#ffffff',
        'mind-dark-greys': '#333',
        'mind-hover-blue': '#06468d',
        'mind-green': '#2dca8c',
        'mind-pink': '#eb5181',
        'mind-content-secondary': '#6d6d6e',
        'mind-content-blue': '#0069ff',
        'mind-light-grey': '#fafafa',
        'mind-surface-content-black': '#121213',
        'mind-surface-content-white': '#fefeff',
        'mind-stroke-border-grey': '#eaeaea',
        'mind-surface-bg-grey': '#f6f6f7',
        'mind-surface-light-blue': '#e8f3ff',
        'mind-content-primary': '#29292a',
        'mind-warm-white': '#f6f5f4',
        'mind-grey-900': '#101215',
        'mind-main-blue': '#eaf0f6',
        'mind-grey-600': '#46525e',
        'mind-grey-700': '#313a43',
        'mind-grey-800': '#1e242a',
        'mind-green-26': '#02c082',
      },
    },
  },
  plugins: [],
};
