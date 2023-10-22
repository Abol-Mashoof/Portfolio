import { CustomDivider } from "../components/common";
import Grid from "@mui/material/Unstable_Grid2";
import { Helmet } from "react-helmet-async";
import { grey } from "@mui/material/colors";
import { SchoolRounded } from "@mui/icons-material";
import { Portfolios } from "../components/pages";
import { Card, CardContent } from "@mui/material";
const Portfolio = ({ helmetTitle }) => {
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
          align="center"
          icon={<SchoolRounded />}
          text="نمونه کارها"
        />
        <Grid
          container
          sx={{
            mx: 3,
            mt: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}>
          <Portfolios />
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Portfolio;
