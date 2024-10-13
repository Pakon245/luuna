import React from 'react';
import Header from './components/Header'; 
import Intro from './components/Intro';
import Img from './components/Img'; 

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header Section */}
      <Header />
      
      {/* Intro Section Centered Vertically */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <Intro /> 
        <div className="mt-4"> {/* เพิ่ม margin ด้านบนเพื่อให้ระยะห่างระหว่าง Intro และภาพ */}
        <Img /> {/* เรียกใช้คอมโพเนนต์ Img ที่แสดงภาพ */}
          </div>
      </div>
    </div>
  );
}

export default App;
