import { createTheme } from '@mui/material/styles';
import { Inter, JetBrains_Mono } from 'next/font/google';

// next/font скачивает шрифты при сборке и раздаёт их с нашего сервера,
// поэтому браузеру не нужно отдельно ходить в Google Fonts
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  display: 'swap',
});

const mono = `${jetbrainsMono.style.fontFamily}, ui-monospace, monospace`;

const theme = createTheme({
  palette: {
    primary: { main: '#9DE97B', dark: '#66c24a', contrastText: '#14151A' },
    secondary: { main: '#7bc4e9', contrastText: '#14151A' },
    warning: { main: '#eee876', contrastText: '#14151A' },
    error: { main: '#da3f26' },
    background: { default: '#fcfbf4', paper: '#ffffff' },
    text: { primary: '#14151A', secondary: '#5B5E66' },
    divider: '#e7e3d3',
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: `${inter.style.fontFamily}, system-ui, -apple-system, 'Segoe UI', sans-serif`,
    h1: { fontSize: '1.75rem', fontWeight: 700 },
    h2: { fontSize: '1.25rem', fontWeight: 700 },
    h3: { fontSize: '1.125rem', fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 },
    caption: { fontFamily: mono },
  },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
    MuiCard: { defaultProps: { variant: 'outlined' }, styleOverrides: { root: { borderRadius: 16 } } },
    MuiChip: { styleOverrides: { label: { fontFamily: mono } } },
  },
});

export default theme;
