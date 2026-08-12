import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("app-ready");

    return () => {
      document.documentElement.classList.remove("app-ready");
    };
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
