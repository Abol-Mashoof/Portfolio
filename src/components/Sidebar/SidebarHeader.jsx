import { useState } from "react";
import { Typography, Box } from "@mui/material";
import avatar from "../../assets/Avatar.jpg";
import { CustomAvatar } from "../common";
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alphabetPersian";
import ThemeActionButton from "../ThemeActionButton";
import { useTheme } from "@mui/material/styles";
import SocialMediaIcon from "../SocialMediaIcon";
const SidebarHeader = () => {
  const [start, setStart] = useState(false);
  const theme = useTheme();
  return (
    <>
      <ThemeActionButton />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 2,
        }}>
        <CustomAvatar avatar={avatar} size={200} fallback={'AM'} />
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          my: 1,
          color: theme.palette.mode === "dark" ? "#fc4c4c" : "#8be9fd",
        }}>
        <Typography variant="caption" color="#fc4c4c">
          {"{{"}
        </Typography>
        <RandomReveal
          isPlaying
          characterSet={alphabetPersian}
          duration={2}
          onComplete={() => setStart(true)}
          characters="ابوالفضل مشعوف"
        />
        <Typography variant="caption" color="#fc4c4c">
          {"}}"}
        </Typography>
      </Typography>
      {start && (
        <Typography variant="subtitle2" color="text.primary" sx={{ mb: 2 }}>
          <RandomReveal
            isPlaying
            characterSet={alphabetPersian}
            duration={4}
            characters="توسعه دهنده ی فول استک"
          />
        </Typography>
      )}
      <SocialMediaIcon />
    </>
  );
};
export default SidebarHeader;
