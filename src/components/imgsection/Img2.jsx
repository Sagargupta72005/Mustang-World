import React from 'react'

const Img2 = () => {
  return (
    <div>
        
      <div className="w-full bg-white  p-6 md:p-12">


      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-190 gap-10 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-lg rounded-lg shadow-md object-cover"
             src="https://media.istockphoto.com/id/1453089776/photo/1969-ford-mustang-mach-1-fastback.jpg?s=612x612&w=0&k=20&c=_8xgI2nTG9jo9KoNbwI3qhiji7NGtDe8CnrrbFA_hEw="
            alt="1972 Ford Mustang gt "
          />
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mustang Fastback
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            The 1972 Mustang  is an iconic blend of raw American muscle
            and timeless automotive design. Known for its aggressive stance,
            powerful V8 engine options, and unmistakable fastback silhouette, it
            remains one of the most celebrated classic cars ever built.
          </p>
        </div>

      </div>
    </div>
      
    </div>
  )
}

export default Img2;
