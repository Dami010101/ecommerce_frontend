import React, { useEffect, useState } from 'react'
import image1 from '../../asset/speaker.jpg'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";



const Banner = () => {
    const slides = [
        { id: 1, url: image1 },
        { id: 2, url: 'https://images.unsplash.com/photo-1542541864-4abf21a55761?q=80&w=1903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, url: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
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
<div className="relative w-full max-w-3xl mx-auto py-2 ">

                    <div className="overflow-hidden relative">
                      <div className="flex transition-transform duration-2000"
                          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {slides.map((slide) => (
                        <div key={slide.id} className="w-full flex-shrink-0">
                            <img style={{ width: '100%', height: '83vh' }} src={slide.url} alt={`Slide ${slide.id}`} className="w-full" />
                        </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                      <button onClick={handlePrev} className="bg-gray-700 text-white p-2 rounded-full"><FaArrowAltCircleLeft />
                      </button>
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                      <button onClick={handleNext} className="bg-gray-700 text-white p-2 rounded-full"><FaArrowAltCircleRight />
                      </button>
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


 </div>
    )
}

export default Banner