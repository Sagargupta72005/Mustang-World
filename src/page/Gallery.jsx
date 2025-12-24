import React from "react";
import { Albums } from "../components/Albums";
import Stack from "../components/gallery/CardRotate";

const Gallery = () => {
  const images = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/638479/pexels-photo-638479.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/57409/ford-mustang-stallion-red-57409.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/166126/pexels-photo-166126.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/3349460/pexels-photo-3349460.jpeg",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/4147628/pexels-photo-4147628.jpeg",
    },
  ];
  return (
    <div>
      <Albums />

      <Stack
        randomRotation={true}
        sensitivity={180}
        sendToBackOnClick={false}
        cardDimensions={{ width: 800, height: 500 }}
        cardsData={images}
      />
      {/* <MustangHero/> */}
    </div>
  );
};

export default Gallery;
