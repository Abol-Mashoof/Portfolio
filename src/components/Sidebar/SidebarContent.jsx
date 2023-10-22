import { grey } from "@mui/material/colors";
import { Divider, Box } from "@mui/material";
import { SidebarHeader, SidebarFooter, SidebarTabs } from ".";

const SidebarContent = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 2,
      }}>
      <SidebarHeader />
      <Divider variant="middle" sx={{ mb: 1, backgroundColor: grey[900] }} />
      <SidebarTabs />
      <Divider variant="middle" sx={{ mt: 1, backgroundColor: grey[900] }} />
      <SidebarFooter />
    </Box>
  );
};
export default SidebarContent;
