import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import Process from "../pages/Process";
import Team from "../pages/Team";
import Journal from "../pages/Journal";
import BlogDetail from "../pages/BlogDetail";
import ContactPage from "../pages/ContactPage";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/process" element={<Process />} />
        <Route path="/team" element={<Team />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
