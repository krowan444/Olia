
import React, { useState, useRef, useEffect } from 'react';

const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setSliderPos((x / rect.width) * 100);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2C4A3E] mb-4">Real results you can see</h2>
        <p className="text-lg text-gray-600">Slide to see our transformative cleaning quality</p>
      </div>
      
      <div 
        ref={containerRef}
        className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize group"
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/clean1/1200/600" 
            alt="Before cleaning" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-1 rounded-full text-sm backdrop-blur-md">BEFORE</div>
        </div>

        {/* After Image */}
        <div 
          className="absolute inset-0" 
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <img 
            src="https://picsum.photos/seed/clean1/1200/600" 
            alt="After cleaning" 
            className="w-full h-full object-cover brightness-110 saturate-110"
          />
          <div className="absolute top-4 right-4 bg-green-600/50 text-white px-4 py-1 rounded-full text-sm backdrop-blur-md">AFTER</div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#2C4A3E]/20">
            <div className="flex gap-1">
              <div className="w-1 h-4 bg-[#2C4A3E] rounded-full"></div>
              <div className="w-1 h-4 bg-[#2C4A3E] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
