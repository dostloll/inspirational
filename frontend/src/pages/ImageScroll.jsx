import React, { useRef } from "react";

const ImageScroll = ({ images }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollRef.current.clientWidth; // Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollRef.current.clientWidth; // Adjust scroll distance as needed
    }
  };

  return (
    <div className=" w-full h-min mt-80 overflow-hidden">
      <div
        className="flex overflow-x-auto scroll-smooth"
        ref={scrollRef}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full"
            style={{ scrollSnapAlign: "start" }}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-64 object-fit"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute mt-80 top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 mt-80 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageScroll;
