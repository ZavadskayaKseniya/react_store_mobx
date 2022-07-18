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
      fontSize: "45px"
    },
    h2: {
      fontSize: "38px"
    },
    h3: {
      fontSize: "32px"
    },
    fontWeightLight: 400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700
  }
});

export default theme;
