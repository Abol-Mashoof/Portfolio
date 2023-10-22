import { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Slide,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import { portfolio } from "../../constants/Portfolio";
import EllipsisText from "react-ellipsis-text";

const Portfolios = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      {portfolio.map((port, index) => (
        <Grid
          key={index}
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={4}
          sx={{ px: 2, mb: 2 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transition: loading ? `${index + 4}99ms` : "0ms",
            }}>
            <Card sx={{ maxWidth: 340, backgroundColor: "tomato" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="220"
                  width="200"
                  image={port.image}
                  alt={port.title}
                />

                <CardContent>
                  <Typography variant="body1" textAlign="left" gutterBottom>
                    {port.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={grey[800]}
                    textAlign="left"
                    sx={{ direction: "ltr" }}
                    gutterBottom>
                    <EllipsisText text={port.info} length={100} />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href={port.link}
                  target="_blank"
                  sx={{ color: "whitesmoke", backgroundColor: "#fc4c4c" }}
                  size="small">
                  اطلاعات بیشتر
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  );
};
export default Portfolios;
