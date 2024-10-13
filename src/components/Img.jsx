import React from 'react';
 
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

function Img() {
  return (
    <div className="flex justify-center space-x-40 p-6">
      
      <img src={img2} alt="Image 2" className="w-1/3 h-auto rounded-lg" />
      <img src={img3} alt="Image 3" className="w-1/3 h-auto rounded-lg" />
    </div>
  );
}

export default Img;
