import React from 'react';
import Image from 'next/image';

const ServiceFlipBox = ({ title, description, imgSrc, link }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
      <a href={link} className="block">
        <div className="flip-box relative w-full h-52">
          <div className="flip-box-inner w-full h-full text-center transition-transform duration-500 transform-style-preserve-3d">
            {/* Front */}
            <div className="flip-box-front absolute w-full h-full flex flex-col items-center justify-center bg-white border-r-2 border-b-2 border-[#f9cfcf] backface-hidden p-4">
              <Image src={imgSrc} alt={title} width={60} height={60} className="mb-2 mt-2 object-contain" />
              <p className="font-medium">{title}</p>
            </div>

            {/* Back */}
            <div className="flip-box-back absolute w-full h-full flex items-center justify-center bg-[#b1c2d4] text-black rotate-y-180 backface-hidden p-4">
              <p className="text-sm">{description}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ServiceFlipBox;
