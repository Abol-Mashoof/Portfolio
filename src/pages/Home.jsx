import { Box, Typography } from "@mui/material";
import { useRef, useEffect, useCallback, useState } from "react";
import { Helmet } from "react-helmet-async";
import Typed from "typed.js";
import TextTransition, { presets } from "react-text-transition";

import bg01 from "../assets/0.jpg";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";
import { Link } from "../constants/Fire";
const Home = ({ helmetTitle }) => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);
  const [index, setIndex] = useState(0);
  const strings = [
    "من توسعه دهنده ی فول استک هستم",
    "من برنامه نویس با ایده های خلاقانه هستم",
    "من فریلنسر هستم",
    "من محتواساز دنیای برنامه نویسی هستم",
    "از پیاده سازی ایده های شما لذت میبرم :)",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["ابوالفضل مشعوف"],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });

    const IntervalTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => {
      typedName.destroy();
      clearInterval(IntervalTransition);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${bg01})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Particles init={particlesInit} loaded={particlesLoaded} options={Link} />
      <Box component="div" sx={{ display: "flex" }}>
        <Typography variant="h3" color="#fc4c4c">
          {"{{"}
        </Typography>{" "}
        <Typography variant="h3" ref={nameEl} color="tomato"></Typography>{" "}
        <Typography variant="h3" color="#fc4c4c">
          {"}}"}
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <TextTransition springConfig={presets.wobbly}>
          <Typography
            variant="h4"
            ref={infoEl}
            color="whitesmoke"
            sx={{
              textDecoration: "underLine",
              mt: 4,
              textDecorationColor: "#fc4c4c",
            }}>
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
      </Box>
    </Box>
  );
};
export default Home;
