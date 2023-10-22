import { Box } from "@mui/material";

const TabPanell = (props) => {
  const { index, children, pageNumber, ...other } = props;
  return (
    <div
      hidden={pageNumber !== index}
      role="tabpanel"
      aria-label={`sidebar-${index}`}
      id={`tabpanel-${index}`}
      {...other}>
      {pageNumber === index && (
        <Box sx={{ height: "100vh", overflow: "hidden" }}>{children}</Box>
      )}
    </div>
  );
};
export default TabPanell;
