import React from "react";

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-300/30 dark:bg-gray-700/30 rounded ${className}`} />
);

const HeroSkeleton = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row items-center justify-between 
      px-6 lg:px-24 py-10 md:min-h-screen pt-20"
    >
      {/* LEFT COLUMN */}
      <div className="w-full md:w-1/2 flex flex-col justify-between items-center mb-10 md:mb-0 sm:px-6">

        {/* Title Placeholder */}
        <Skeleton className="w-64 h-10 sm:h-12 lg:h-16 mb-6" />

        {/* Paragraph Lines */}
        <div className="flex flex-col gap-3 w-full">
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-5/6 h-3" />
          <Skeleton className="w-4/6 h-3" />
          <Skeleton className="w-3/4 h-3" />
          <Skeleton className="w-2/3 h-3" />
        </div>

        {/* Mobile “Read More” Button Placeholder */}
        <div className="w-full flex justify-center mt-4 md:hidden">
          <Skeleton className="w-24 h-4" />
        </div>
      </div>

      {/* RIGHT COLUMN - CAR IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Skeleton className="w-full max-w-xs sm:max-w-md lg:max-w-xl h-60 sm:h-80 lg:h-[420px]" />
      </div>
    </div>
  );
};

export default HeroSkeleton;
