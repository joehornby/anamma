import React from 'react';
import { Suspense } from 'react';
import './App.scss';
/* Components */
import Header from "./components/header";
/* React Three Fiber */
import { Canvas } from "react-three-fiber";
import { Html } from "drei";


function App() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
          <div className="container">
            <div className="headline">
              <h1>The only interview course you need.</h1>
              <h2>Obstetrics and Gynaecology ST1 &amp; ST3 Interview Masterclasses.</h2>
            </div>
          </div>
      </Suspense>
      <Canvas
        concurrent
        colorManagement
        camera={{ position:[0, 0, 120], fov: 70 }}>
          
        </Canvas>
      
    </>
  );
}

export default App;
