import { Typography, Avatar, Box, Card } from "@mui/material";
import { userComments } from "../../constants/details";
import Slider from "react-slick";
import { grey } from "@mui/material/colors";

const SliderComments = () => {
  const options = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <Box
      component="div"
      sx={{ mt: 10, justifyContent: "center", alignItems: "center" }}>
      <Slider {...options}>
        {userComments.map((user, index) => (
          <Box component="div" key={index} sx={{ justifyContent: "center" }}>
            <Avatar
              src={user.avatar}
              variant="rounded"
              sx={{ height: 100, width: 100, margin: "0 auto", mb: 2 }}
            />
            <Typography variant="body1" textAlign="center" color="text-primary">
              {user.fullname}
            </Typography>
            <Typography
              variant="body2"
              textAlign="center"
              color="text-primary"
              sx={{ mb: 2 }}>
              {user.jobTitle}
            </Typography>
            <Card
              sx={{
                backgroundColor: grey[800],
                width: 1 / 2,
                m: "0 auto",
                borderRadius: 5,
                padding: 3,
                mb: 2,
              }}>
              <Typography variant="body2" color={grey[300]} textAlign="center">
                {user.comment}
              </Typography>
              <Typography variant="body1" color={grey[100]} textAlign="center">
                {user.admin}{" "}{user.icon}
              </Typography>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
export default SliderComments;
