import { Card, CardContent } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { grey } from "@mui/material/colors";
import { ForumRounded } from "@mui/icons-material";
import { CustomDivider } from "../components/common";
import { SliderComments } from "../components/pages";
const Comments = ({ helmetTitle }) => {
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: grey[950],
        direction: "rtl",
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
          icon={<ForumRounded />}
          text="نظرات"
        />
        <SliderComments />
      </CardContent>
    </Card>
  );
};
export default Comments;
