import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Helmet } from "react-helmet-async";
import { grey } from "@mui/material/colors";
import {
  SettingsEthernetRounded,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";
import { CustomDivider } from "../components/common";
import { DevEXPTimeLine, DevEDUTimeLine } from "../components/pages";
const Resume = ({ helmetTitle }) => {
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
        <CustomDivider
          bColor="tomato"
          cColor="secondary"
          icon={<SettingsEthernetRounded />}
          align="center"
          text="رزومه من"
        />
        <Grid container sx={{ mt: 4 }}>
          <Grid xs={6}>
            <CustomDivider
              bColor="yellowgreen"
              cColor="warning"
              icon={<HomeRepairServiceRounded />}
              align="center"
              text="تجربیات"
            />
            <DevEXPTimeLine />
          </Grid>
          <Grid xs={6}>
            <CustomDivider
              bColor="blueviolet"
              cColor="info"
              icon={<SchoolRounded />}
              align="center"
              text="تحصیلات"
            />
            <DevEDUTimeLine />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Resume;
