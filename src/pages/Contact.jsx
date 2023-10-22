import { useState, useEffect } from "react";
import { Typography, Card, CardContent, Slide } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { AccountCircle } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import { grey } from "@mui/material/colors";
import worldMap from "../assets/map.svg";
import { CustomDivider } from "../components/common";
import { ContactForm } from "../components/pages";

const Contact = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Card
      sx={{
        direction: "rtl",
        height: "100vh",
        backgroundColor: grey[950],
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
      }}>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="tomato"
          cColor="secondary"
          align="center"
          icon={<AccountCircle />}
          text="ارتباط با من"
        />
        <Grid container sx={{ mt: 5 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}>
            <Grid xs={12} sm={12} md={8}>
              <Card sx={{ justifyContent: "center", alignItems: "center" }}>
                <ContactForm />
              </Card>
            </Grid>
          </Slide>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}>
            <Grid
              xs={0}
              sm={0}
              md={4}
              sx={{
                textAlign: "center",
                backgroundImage: `url(${worldMap})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}>
              <Typography
                variant="h6"
                color="text-primary"
                sx={{
                  fontFamily: "vazir",
                  mt: 4,
                  display: { xs: "none", sm: "none", md: "block" },
                }}>
                بیا راجب همه چی باهم صحبت کنیم
              </Typography>
              <Typography
                variant="body1"
                color="text-primary"
                sx={{
                  mt: 2,
                  display: { xs: "none", sm: "none", md: "block" },
                }}>
                🖐{" "}
                <a
                  href="mailto:gho3twow@gmail.com"
                  alt="email"
                  style={{ color: "tomato" }}>
                  ایمیل
                </a>{" "}
                بزن به من
              </Typography>
            </Grid>
          </Slide>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Contact;
