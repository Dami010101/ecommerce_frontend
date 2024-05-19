import React, { useEffect, useState } from 'react'


const Banner = () => {
    const slides = [
        { id: 1, url: 'https://via.placeholder.com/600/92c952' },
        { id: 2, url: 'https://via.placeholder.com/600/771796' },
        { id: 3, url: 'https://via.placeholder.com/600/24f355' },
      ];
    
      const [currentSlide, setCurrentSlide] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
      }, [slides.length]);
    
      const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      };
    
      const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      };
    
  return (
<div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden relative">
        <div className="flex transition-transform duration-1000"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <img src={slide.url} alt={`Slide ${slide.id}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button onClick={handlePrev} className="bg-gray-700 text-white p-2 rounded-full">Prev</button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button onClick={handleNext} className="bg-gray-700 text-white p-2 rounded-full">Next</button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>  )
}

export default Banner