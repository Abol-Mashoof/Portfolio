import { Tab, Tabs } from "@mui/material";
import { dataSidebar } from "../../constants/tabsData";
import { useContext } from "react";
import MainContext from "../../context";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);
  const tabs = dataSidebar();
  const theme = useTheme();
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      indicatorColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      value={pageNumber}
      onChange={handlePageNumber}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          onClick={() => setDrawerOpen(false)}
          iconPosition="start"
          {...tab}
          sx={{
            "&.MuiTab-root": {
              minHeight: 43,
              backgroundColor:
                theme.palette.mode === "dark" ? grey[800] : grey[600],
              borderRadius: 3,
              mx: 1,
              my: 0.5,
            },
          }}
        />
      ))}
    </Tabs>
  );
};
export default SidebarTabs;
