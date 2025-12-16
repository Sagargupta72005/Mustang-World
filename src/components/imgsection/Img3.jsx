import React from 'react'

const Img3 = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1174219488/photo/1969-ford-mustang-cut.jpg?s=612x612&w=0&k=20&c=B1FON1o4GbGirX-9uqeNwD6gqkd_OUDDrSQzle1gfH4=')`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative text-center px-6 md:px-12 text-white max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          1975 Mustang
        </h1>
        <p className="text-lg md:text-2xl leading-relaxed">
          The 1975 Mustang remains a classic example of American muscle, combining sleek
          design with powerful performance. Its timeless silhouette continues to capture
          the hearts of car enthusiasts worldwide.
        </p>
      </div>
    </div>
  )
}

export default Img3;
