"use client";
import { useState, useEffect } from "react";

const Slideshow = () => {
  const [current, setCurrent] = useState(0); // Initial state should be just a number
  const slides = [
    "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/woman-in-towel-applying-body-cream-with-hands-loti-XNNXLFD.jpg",
    "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/12/anthony-tran-Sd9A6NVHsd4-unsplash3.jpeg",
    "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/12/kalos-skincare-jyKa0Ynxvow-unsplash.jpeg",
  ];

  const dotColors = ["#000000", "#cfcec5", "#cfcec5"];

  // Update the slide automatically every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
    }, 8000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Function to handle click and update the current slide
  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="p-5 mt-[12vh] z-10">
      <img
        className="w-[25vw] h-[65vh] rounded-tl-[100%] rounded-tr-[100%]"
        src={slides[current]}
        alt={`Slide ${current + 1}`}
      />
      <div className="px-[8vw]">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`text-[6vh] px-[0vw] py-2 rounded mx-2 ${
              current === index ? "text-white" : "text-[#cccccc]"
            }`}
            onClick={() => handleDotClick(index)}
          >
            •
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
