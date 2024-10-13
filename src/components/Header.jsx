import React from 'react';

function Header() {
  return (
    <header className=" text-back p-6">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrL0q1GCq4yqgXZR63GG1LHTuKSIIbjVqVQg&shttps://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/36d5c869-2322-4446-b1fb-3e783493d87e/AIR+JORDAN+1+LOW.png" alt="มือที่กำลังเขียนบนทัชแพด" class="image"/>
      <h1 className="text-6xl font-bold">Product</h1>
      <h2 className="text-4xl mt-2">AI Chatbot</h2>
      <p className="text-1xl mt-3">
      ยกระดับการสื่อสารและประมวลผลข้อมูลของคุณด้วย AI Chatbot
      </p>
      <p className="text-1xl mt-3">
      เปลี่ยนการสนทนาธรรมดาให้เป็นประสบการณ์ที่ราบรื่นและมีประสิทธิภาพยิ่งขึ้น
      </p>
      <p className="text-1xl mt-3">
      ด้วยพลังของ AI เพิ่มความสะดวกสบายในการตอบคำถามและให้ข้อมูลทุกที่ทุกเวลา
      </p>
      <button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 ${className}">
        Get Star
      </button>
      
    </header>
  );
}

export default Header;  