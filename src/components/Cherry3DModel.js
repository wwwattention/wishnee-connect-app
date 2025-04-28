import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PresentationControls } from '@react-three/drei';
import { Box } from '@mui/material';

const CherryModel = ({ scale = 2, position = [0, 0, 0] }) => {
  // В идеале здесь должна быть реальная 3D модель вишни
  // Для примера создадим простую модель из сфер
  const cherryRef = useRef();
  
  useFrame((state, delta) => {
    if (cherryRef.current) {
      cherryRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={cherryRef} scale={scale} position={position}>
      {/* Вишенка */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#D10040" roughness={0.4} metalness={0.2} />
      </mesh>
      
      {/* Вторая вишенка */}
      <mesh position={[1.5, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#D10040" roughness={0.4} metalness={0.2} />
      </mesh>
      
      {/* Стебель */}
      <mesh position={[0.75, 1, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 2, 16]} rotation={[Math.PI/2, 0, 0]} />
        <meshStandardMaterial color="#3A5F0B" roughness={0.8} />
      </mesh>
      
      {/* Листик */}
      <mesh position={[0.25, 1.5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.3, 1, 16]} />
        <meshStandardMaterial color="#4CAF50" roughness={0.8} />
      </mesh>
    </group>
  );
};

const Cherry3DModel = ({ height = 400 }) => {
  return (
    <Box sx={{ height, width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <PresentationControls
          global
          zoom={1}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}>
          <CherryModel />
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </Box>
  );
};

export default Cherry3DModel;