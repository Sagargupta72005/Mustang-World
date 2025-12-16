import React from "react";

const SkeletonBlock = ({ className }) => (
  <div
    className={`animate-pulse bg-gray-300/40 dark:bg-gray-700/40 rounded ${className}`}
  />
);

export default function TextPressureSkeleton() {
  return (
    <div
      className="relative w-full h-full overflow-hidden p-5 
      flex items-center justify-center"
    >
      {/* Mimics TextPressure title */}  
      <SkeletonBlock className="w-3/4 h-10 sm:h-14 md:h-16 lg:h-20" />
    </div>
  );
}
