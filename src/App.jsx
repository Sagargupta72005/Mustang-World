import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Gallery from "./page/Gallery";
import Modelpage from "./page/Modelpage";
import About from "./page/About";
import Newspage from "./page/Newspage";
import SplashCursor from "./components/SplashCursor";
import LoadingScreen1 from "./components/loading/LoadingScreen1";
import Error404 from "./page/error";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./components/context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <LoadingScreen1>
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/model" element={<Modelpage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<Newspage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <SplashCursor />
        <Footer />
      </LoadingScreen1>
    </ThemeProvider>
  );
}
