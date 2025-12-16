import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import { ThemeProvider } from "./context/ThemeContext";
import Gallery from "./page/Gallery";
import Modelpage from "./page/Modelpage";
import Footer from "./components/footer";
import About from "./page/About";
import Newspage from "./page/Newspage";
import SplashCursor from "./components/SplashCursor";
import LoadingScreen1 from "./components/loading/LoadingScreen1";
import Error404 from "./page/error";
import Header from "./components/Header";
import Footer1 from "./components/Footer1";
export default function App() {
  return (
    <ThemeProvider>
      

      <LoadingScreen1>
        <Header />
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Model" element={<Modelpage />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About />} />
          <Route path="/News" element={<Newspage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <SplashCursor />

        <Footer1 />
      </LoadingScreen1>
    </ThemeProvider>
  );
}
