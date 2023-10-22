import { Sidebar } from "../components/Sidebar";
import SidebarContainer from "./SidebarContainer";
import ContentContainer from "./ContentContainer";
import MainLayout from "../Layout/MainLayout";
import { TabPanell } from "../components/pages";
import { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import MainContext from "../context";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DrawerActionButton } from "../components/Drawer";
import { Home, About, Resume, Portfolio, Comments, Contact } from "../pages";
function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const handlePageNumber = (event, newValue) => {
    console.log("Pagenumber Event: ", event);
    console.log("pageNumber:", newValue);
    return setPageNumber(newValue);
  };
  const handlePageChange = (index) => {
    setPageNumber(index);
  };

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, []);
  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);
  return (
    <div className="AppContainer">
      <MainContext.Provider
        value={{
          pageNumber,
          handlePageNumber,
          drawerOpen,
          setDrawerOpen,
          handleThemeChange,
        }}>
        <MainLayout mode={mode}>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <DrawerActionButton />
          <ContentContainer>
            <SwipeableViews index={pageNumber} onChangeIndex={handlePageChange}>
              <TabPanell pageNumber={pageNumber} index={0}>
                <Home helmetTitle={"صفحه شخصی | صفحه اصلی"} />
              </TabPanell>
              <TabPanell pageNumber={pageNumber} index={1}>
                <About helmetTitle={"صفحه شخصی | درباره من"} />
              </TabPanell>
              <TabPanell pageNumber={pageNumber} index={2}>
                <Resume helmetTitle={"صفحه شخصی | رزومه من"} />
              </TabPanell>
              <TabPanell pageNumber={pageNumber} index={3}>
                <Portfolio helmetTitle={"صفحه شخصی | نمونه کارها"} />
              </TabPanell>
              <TabPanell pageNumber={pageNumber} index={4}>
                <Comments helmetTitle={"صفحه شخصی | نظرات"} />
              </TabPanell>
              <TabPanell pageNumber={pageNumber} index={5}>
                <Contact helmetTitle={"صفحه شخصی | کانکشن"} />
              </TabPanell>
            </SwipeableViews>
          </ContentContainer>
        </MainLayout>
      </MainContext.Provider>
    </div>
  );
}

export default AppContainer;
