import React from "react";
import ReactDOM from "react-dom/client";

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

try {
  AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: true,
    offset: 80
  });
} catch (e) {
  console.warn("AOS init error:", e);
}

try {
  gsap.config({
    nullTargetWarn: false
  });
} catch (e) {
  console.warn("GSAP config error:", e);
}

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
