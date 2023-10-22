import { GitHub, Telegram, Instagram, WhatsApp } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";
const SocialMediaIcon = () => {
  const theme = useTheme();
  return (
    <Box component="div" sx={{ margin: "0 auto", textAlign: "center" }}>
      <IconButton aria-label="Github">
        <a href="" target="_blank" rel="noopener noreferrer">
          <GitHub
            sx={{
              color: theme.palette.mode === "dark" ? "#fc4c4c" : "#8be9fd",
            }}
          />
          {/**noopener noreferrer -> no rabt az jayi ke omade || _blank -> new Page */}
        </a>
      </IconButton>
      <IconButton aria-label="Instagram">
        <a href="" target="_blank" rel="noopener noreferrer">
          <Instagram
            sx={{
              color: theme.palette.mode === "dark" ? "#fc4c4c" : "#8be9fd",
            }}
          />
          {/**noopener noreferrer -> no rabt az jayi ke omade || _blank -> new Page */}
        </a>
      </IconButton>
      <IconButton aria-label="Telegram">
        <a href="" target="_blank" rel="noopener noreferrer">
          <Telegram
            sx={{
              color: theme.palette.mode === "dark" ? "#fc4c4c" : "#8be9fd",
            }}
          />
          {/**noopener noreferrer -> no rabt az jayi ke omade || _blank -> new Page */}
        </a>
      </IconButton>
      <IconButton aria-label="WhatsApp">
        <a href="" target="_blank" rel="noopener noreferrer">
          <WhatsApp
            sx={{
              color: theme.palette.mode === "dark" ? "#fc4c4c" : "#8be9fd",
            }}
          />
          {/**noopener noreferrer -> no rabt az jayi ke omade || _blank -> new Page */}
        </a>
      </IconButton>
    </Box>
  );
};
export default SocialMediaIcon;
