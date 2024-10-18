import React, { useState } from 'react';

const ImageSlider = () => {
  const imageLinks = [
    "https://images.unsplash.com/photo-1728068944828-b9d488c870b0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1727967893805-34e70bbefc6c?q=80&w=3275&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719937206141-608fae5e8fa0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1699600552748-3bb02605fc4e?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1727190886669-6e9ed4b07b2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageLinks.length);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageLinks.length) % imageLinks.length);
  };

  // useEffect(() => {
  //   const autoSlide = setInterval(() => {
  //     if (!isPaused) {
  //       handleNext();
  //     }
  //   }, 3000); // Change image every 3 seconds
  //
  //   return () => clearInterval(autoSlide);
  // }, [isPaused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <img src={imageLinks[currentIndex]} className="w-full h-[80vh] object-cover" alt="Slider" />

      <div className="flex justify-center mt-4">
        {imageLinks.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button onClick={handleBack} className="p-2 bg-gray-700 text-white rounded">Back</button>
        <button onClick={handleNext} className="p-2 bg-gray-700 text-white rounded">Next</button>
      </div>
    </div>
  );
}

export default ImageSlider;

