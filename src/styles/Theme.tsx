import {createTheme} from "@mui/material";
import {amber} from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main:"rgba(0,0,0,0.6)"},
    secondary: {
      main:"#0c27af"},
    error: {
      main:"#c00202"},

  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "1em"
    },
    h2: {
      fontSize: "0.6em"
    },
    h3: {
      fontSize: "0.4em"
    },
    fontWeightLight: 400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700
  }
});

export default theme;
