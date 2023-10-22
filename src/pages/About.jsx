import { Card, CardContent, useMediaQuery } from "@mui/material";
import { CustomAvatar, CustomDivider } from "../components/common";
import { useTheme } from "@mui/material/styles";
import { Helmet } from "react-helmet-async";
import { CodeRounded, DisplaySettingsRounded } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
import { DevInfo, DevWorkCount, Skill } from "../components/pages";
import avatar from "../assets/02.jpg";
const About = ({ helmetTitle }) => {
  const theme = useTheme();
  const isLgImgDown = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: grey[950],
        direction: "rtl",
        overflowY: "scroll",
      }}>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid container>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            <CustomDivider
              bColor="tomato"
              cColor="secondary"
              icon={<CodeRounded />}
              align="right"
              text="توسعه دهنده ی فرانت اند و دانشجوی برنامه نویسی"
            />
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "space-around",
                  sm: "space-between",
                  md: "space-between",
                  lg: "space-between",
                  xl: "space-between",
                },
                alignItems: "center",
              }}>
              <Grid
                xs={0}
                sm={4}
                md={3}
                lg={3}
                xl={3}
                sx={{
                  display: { xs: "none", sm: "block", md: "block" },
                }}>
                <DevWorkCount />
              </Grid>

              <Grid xs={12} sm={8} md={9} lg={9} xl={9}>
                <DevInfo />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            xs={0}
            sm={0}
            md={4}
            lg={4}
            xl={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}>
            {isLgImgDown ? (
              <CustomAvatar avatar={avatar} size={200} fallback={"AM"} />
            ) : (
              <CustomAvatar avatar={avatar} size={275} fallback={"AM"} />
            )}
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 2 }}>
            <CustomDivider
              bColor="tomato"
              cColor="secondary"
              icon={<DisplaySettingsRounded />}
              align="center"
              text="مهارت های من"
            />
            {/* skills */}
            <Skill />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default About;
