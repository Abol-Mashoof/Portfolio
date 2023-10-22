import { ThemeProvider } from "@emotion/react";
import { darkThem, lightThem } from "./theme/them";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { HelmetProvider } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";

const chachRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children, mode }) => {
  const them = mode === "dark" ? darkThem : lightThem
  return (
    <CacheProvider value={chachRtl}>
      <ThemeProvider theme={them}>
        <HelmetProvider>
          <Grid container sx={{ height: "100vh" }}>
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default MainLayout;
