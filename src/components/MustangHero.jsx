import React from "react";

const MustangHero = () => {
return ( <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-black px-6 lg:px-24 py-20">

  <div className="md:w-1/2 flex justify-center  md:mt-0">
    <img
      src="https://media.gettyimages.com/id/1475841990/photo/model-ford-mustang-gt-cobra.jpg?s=612x612&w=0&k=20&c=di2co11f0Bjh-fXPlckS_gZslq-_rzPTmBYRk74xZSs="
      alt="Ford Mustang 1967"
      className="w-full max-w-md lg:max-w-xl rounded-2xl shadow-xl transition-transform hover:scale-105"
    />
  </div>
</section>

);
};

export default MustangHero;
