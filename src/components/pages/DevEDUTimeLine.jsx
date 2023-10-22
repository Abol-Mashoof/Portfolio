import { useState, useEffect } from "react";
import { SchoolRounded } from "@mui/icons-material";
import { Slide, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import { devEdu } from "../../constants/details";

const DevEDUTimeLine = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <Timeline position="alternate" sx={{ direction: "ltr" }}>
      {devEdu.map((item, index) => (
        <Slide
          direction="up"
          in={loading}
          style={{
            transitionDelay: loading ? `${index + 1}100ms` : "0ms",
          }}>
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot
                sx={{ borderColor: "blueviolet" }}
                variant="outlined">
                <SchoolRounded color="info" />
              </TimelineDot>
              {index !== 3 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="caption" color="gray">
                {item.year}
              </Typography>
              <Typography variant="body1" color="text.primary">
                {item.cert}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {item.major}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {item.place}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};
export default DevEDUTimeLine;
