import { Divider, Chip, Box, Typography, LinearProgress } from "@mui/material";
import { Fragment } from "react";
const Skills = ({ icon, name, color, value }) => {
  return (
    <Fragment>
      <Divider
        textAlign="right"
        sx={{ "&::before, &::after": { borderColor: `${color}` }, mt: 3 }}>
        <Chip
          icon={<Box component="img" src={icon} sx={{ height: 30 }}></Box>}
          color={color}
          label={name}
          sx={{ color: "#000", p: "20px" }}
        />
      </Divider>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
        }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color={color}>
            {Math.round(value)} %
          </Typography>
        </Box>
        <Box sx={{ width: "100%", m: 1 }}>
          <LinearProgress
            value={value}
            variant="determinate"
            color={color}
            sx={{ height: 10, borderRadius: 10,mt:1 }}
          />
        </Box>
      </Box>
    </Fragment>
  );
};
export default Skills;
