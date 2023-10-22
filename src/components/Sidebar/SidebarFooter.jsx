import { Box, Typography } from "@mui/material";
import { FavoriteRounded } from "@mui/icons-material";
const SidebarFooter = () => {
  return (
    <Box
      sx={{
        height: 70,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      <Typography variant="body1" color="text.primary">
        طراحی شده با{" "}
        <FavoriteRounded sx={{ verticalAlign: "middle", color: "tomato" }} />
      </Typography>
    </Box>
  );
};
export default SidebarFooter;
