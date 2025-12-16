import React, { useEffect, useState, createContext, useContext } from "react";
import { useLocation } from "react-router-dom";

export const LoadingContext = createContext();

export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Trigger loading on route change
  useEffect(() => {
    triggerLoad();
  }, [location.pathname]);

  const triggerLoad = () => {
    setLoading(true);

    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    setTimeout(() => {
      setLoading(false);
      document.body.removeChild(script);
    }, 1200);
  };

  return (
    <LoadingContext.Provider value={{ triggerLoad }}>
      {loading ? (
        <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50">

          <div
            className="tenor-gif-embed w-full max-w-[480px]"
            data-postid="17689442"
            data-share-method="host"
            data-aspect-ratio="1.65803"
            data-width="100%"
          ></div>

          <style>{`
            .tenor-gif-embed a { display: none !important; }
          `}</style>

        </div>
      ) : (
        children
      )}
    </LoadingContext.Provider>
  );
}
