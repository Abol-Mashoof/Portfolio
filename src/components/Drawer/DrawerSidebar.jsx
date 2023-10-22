import { Drawer } from "@mui/material";
import { useContext } from "react";
import MainContext from "../../context";
import {SidebarContent} from "../Sidebar"
const DrawerSidebar = () => {
  const { setDrawerOpen, drawerOpen } = useContext(MainContext);
  return (
    <>
      <Drawer
        variant="temporary"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        sx={{
          "& .MuiDrawer-paper": { width: 280 },
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}>
            <SidebarContent />
        </Drawer>
    </>
  );
};
export default DrawerSidebar;
