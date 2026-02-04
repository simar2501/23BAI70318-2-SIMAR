import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1f3a2a' },
    secondary: { main: '#1f3a2a' },
    background: {
      default: 'transparent',
      paper: '#f8f9f5'
    },
    text: {
      primary: '#1f2937',
      secondary: '#4b5563'
    }
  },
  typography: {
    fontFamily: 'Inter, system-ui, Arial, sans-serif',
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#111827',
          color: '#e5e7eb'
        }
      }
    }
  }
})

export default theme
