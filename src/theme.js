import { createTheme } from "@mui/material/styles";

// ---- Design tokens ----
// Paper:   #ECEFE9  pale sage-white background
// Ink:     #16231C  deep pine-black (text)
// Primary: #2F5D50  deep pine/teal green
// Accent:  #C08A3E  muted brass/ochre
// Support: #8E6E53  warm taupe
// Line:    #D9D3C2  hairline border colour

export const tokens = {
  paper: "#ECEFE9",
  paperAlt: "#E4E8DF",
  ink: "#16231C",
  inkSoft: "#3B443E",
  primary: "#2F5D50",
  primaryDark: "#1F4038",
  accent: "#C08A3E",
  accentSoft: "#DDB877",
  support: "#8E6E53",
  line: "#D9D3C2",
  cream: "#FBF9F3",
};

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: tokens.paper,
      paper: tokens.cream,
    },
    primary: {
      main: tokens.primary,
      dark: tokens.primaryDark,
      contrastText: tokens.cream,
    },
    secondary: {
      main: tokens.accent,
      contrastText: tokens.ink,
    },
    text: {
      primary: tokens.ink,
      secondary: tokens.inkSoft,
    },
    divider: tokens.line,
  },
  typography: {
    fontFamily: "'Work Sans', 'Segoe UI', sans-serif",
    h1: {
      fontFamily: "'Fraunces', Georgia, serif",
      fontWeight: 500,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "'Fraunces', Georgia, serif",
      fontWeight: 500,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: "'Fraunces', Georgia, serif",
      fontWeight: 500,
    },
    h4: {
      fontFamily: "'Fraunces', Georgia, serif",
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.7,
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.65,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
      letterSpacing: "0.01em",
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: "10px 22px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "24px",
          paddingRight: "24px",
        },
      },
    },
  },
});

export default theme;
