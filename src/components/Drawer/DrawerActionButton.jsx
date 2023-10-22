import { Fab, Box } from "@mui/material";
import { useContext } from "react";
import MainLayout from "../../context";
import { grey } from "@mui/material/colors";
import { MenuRounded } from "@mui/icons-material";
const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(MainLayout);
  return (
    <Box
      sx={{
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}>
      <Fab
        size="small"
        aria-label="sidebar"
        onClick={() => setDrawerOpen(true)}
        sx={{
          backgroundColor: grey[900],
          position: "absolute",
          m: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <MenuRounded sx={{ color: grey[400] }} />
      </Fab>
    </Box>
  );
};
export default DrawerActionButton;
