import React from 'react';
import { useRef, Suspense } from 'react';
import './App.scss';
/* Components */
import Header from "./components/header";
/* React Three Fiber */
import { Canvas } from "react-three-fiber";
import { Html, Loader, useGLTFLoader } from "drei";

const modelPath: string = '/forceps1.gltf';

const Model = () => {
  const gltf = useGLTFLoader(modelPath, true);
  return <primitive object={gltf.scene} dispose={null} />;
}

const Lights = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.25} />
      {/* Diretion light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Spotlight Large overhead light */}
      <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
    </>
  );
};

function App() {
  
  return (
    <>
      <Header />
      <Canvas
        concurrent
        colorManagement
        camera={{ position:[0, 0, 120], fov: 20 }}>
        <Lights />
        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            <mesh position={[0, 0, 0]} scale={[1.2, 1.2, 1.2]} rotation={[0,10,10]}>
              <Model />
            </mesh>
            <Html fullscreen>
              <div className="container">
                <div className="headline">
                  <h1>The only interview course you need.</h1>
                  <h2>Obstetrics and Gynaecology ST1 &amp; ST3 Interview Masterclasses.</h2>
                </div>
              </div>
              </Html>
          </group>
        </Suspense>
      </Canvas>
      
    </>
  );
}

export default App;
