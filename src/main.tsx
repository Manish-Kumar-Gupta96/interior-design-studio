import React from "react";
import ReactDOM from "react-dom/client";

import "jquery-ui/ui/widget";
import "jquery-ui/ui/widgets/accordion";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import AOS from "aos";
import "aos/dist/aos.css";

import { gsap } from "gsap";

import App from "./App";
import "./assets/css/main.css";


AOS.init({
  duration: 900,
  easing: "ease-out-cubic",
  once: true,
  offset: 80,
  disable: () => window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
});

gsap.config({
  nullTargetWarn: false
});

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
