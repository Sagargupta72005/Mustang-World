import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SkeletonPage from "./SkeletonPage";

export default function LoadingScreen1({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show loading immediately on route change
    setLoading(true);

    // Remove loading as soon as the next paint cycle happens
    requestAnimationFrame(() => {
      setLoading(false);
    });

  }, [location.pathname]);

  return loading ? <SkeletonPage /> : children;
}
