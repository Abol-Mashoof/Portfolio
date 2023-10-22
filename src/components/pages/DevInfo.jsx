import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { purple } from "@mui/material/colors";
import { Typography } from "@mui/material";
const Info = ({ children }) => {
  return (
    <Typography
      variant="body1"
      color="text.primary"
      textAlign="left"
      sx={{ py: 1 }}>
      {children}
      <KeyboardArrowLeftRounded
        sx={{ verticalAlign: "bottom", color: purple[200] }}
      />
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی : ابوالفضل مشعوف</Info>
      <Info>سن : 18</Info>
      <Info>شهر : مشهد</Info>
      <Info>gho3twow@gmail.com : ادرس ایمیل</Info>
      <Info>شماره موبایل : 09154929118</Info>
    </>
  );
};
export default DevInfo;
