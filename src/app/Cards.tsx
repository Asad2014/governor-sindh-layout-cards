

import React from 'react';
import Image from 'next/image';

const Cards = () => {
  return (
    <div className="flex flex-col">
    
      <div className="flex justify-around flex-wrap">
        <div className="w-3/12 py-3">
          <div className="flex justify-center">
            <Image src="/pic 1.jpg" width={350} height={200} alt="First Image"/>
          </div>
        </div>
        <div className="w-3/12 py-3">
          <div className="flex justify-center">
            <Image src="/pic 2.jpg" width={350} height={200} alt="Second Image" />
          </div>
        </div>
        <div className="w-3/12 py-3">
          <div className="flex justify-center">
            <Image src="/pic 3.jpg" width={350} height={200} alt="Third Image" />
          </div>
        </div>
      </div>

    
      <div className="flex justify-around flex-wrap">
        <div className="w-3/12 py-3">
          <div className="flex justify-center">
            <Image src="/pic 4.jpg" width={350} height={200} alt="Fourth Image" />
          </div>
        </div>
        <div className="w-3/12 py-3">
          <div className="flex justify-center">
            <Image src="/pic 5.jpg" width={350} height={200} alt="Fifth Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;


