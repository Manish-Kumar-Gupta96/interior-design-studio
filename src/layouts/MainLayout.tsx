import { ReactNode, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import ScrollProgress from "../components/common/ScrollProgress";
import Preloader from "../components/common/Preloader";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BackToTop from "../components/common/BackToTop";
import AOS from "aos";

interface MainLayoutProps {
  children?: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [pathname]);

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Header />
      <main className="w-full">
        {children || <Outlet />}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default MainLayout;
