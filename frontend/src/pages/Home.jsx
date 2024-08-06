import React from "react";
import ImageScroll from "./ImageScroll";

const Home = () => {
  const imageUrls = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/200/300?grayscale",
    // Add more image URLs here
  ];
  return (
    <>
      <div className="container min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Image Scroll with Buttons</h1>
        <ImageScroll images={imageUrls} />
      </div>
    </>
  );
};

export default Home;
