import React from "react";
import { createRoot } from "react-dom/client";
import AppContainer from "./container/AppContainer";

// React Slick Files CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = createRoot(document.getElementById("root"));
root.render(<AppContainer />);
