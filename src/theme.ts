import {createMuiTheme} from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo';

export const titleFontFamily = [
  'Oxygen',
  'Helvetica',
  'Arial',
  'sans-serif',
].join(',');

export const bodyFontFamily = [
  'Open Sans',
  'Helvetica',
  'Arial',
  'sans-serif',
].join(',');

export const monospaceFontFamily = [
  'Ubuntu Mono',
  'monospace',
].join(',');

export const cardShadowSize = 5;
export const cardBorderRadius = 15;

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: indigo.A200,
      main: indigo.A400,
      dark: indigo.A700,
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: titleFontFamily,
    button: {
      fontSize: '1.2rem',
    },
  },
});
