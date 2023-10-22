import { createTheme } from "@mui/material";

export const lightThem = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "tanha ,vazir, roboto",
  },
  palette: {
    mode: "light",
    secondary: { main: "#fc4c4c" },
    primary: {
      main: "#8be9fd",
    },
  },
});

export const darkThem = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "tanha ,vazir, roboto",
  },
  palette: {
    mode: "dark",
    secondary: { main: "#fc4c4c" },
    primary: {
      main: "#8be9fd",
    },
  },
});
