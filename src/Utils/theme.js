export const theme = Object.freeze({
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
    table: 'Lucida Sans Unicode, Lucida Grande, Sans-Serif',
  },
  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    ml: 24,
    l: 32,
    xl: 64,
  },
  fontWeights: {
    normal: 400,
    medium: 700,
    bold: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    statsText: '#ff9',
    linkActive: 'red',
    linkHover: 'black',
    backdropBackground: '#101510a1',
    modalBackground: '#fff',
    primary: '#07c',
    secondary: '#30c',

    deletBtn: 'lightcoral',
    tableBorderColor: 'rgb(0, 128, 255)',
    tableBgcHead: '#bcebdd',
    tableBgc: '#f8e391',
    phonebookBcg: 'lightcyan',
  },
  radii: {
    none: '0',
    normal: '3px',
    round: '50%',
  },
  borders: {
    none: 'none',
    phonebook: '2px solid  black',
    contactForm: '1px dashed black',
    headerBorder: '2px solid  blue',
  },
  shadows: {
    boxShadow: '0px 0px 4px 3px gray',
    buttonsShadow: ' 0 1px 1px #2d2020',
    deletButton: '3px 3px 3px 0 red',
    textShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) ',
  },
});
