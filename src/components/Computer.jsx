import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 레트로 모니터 컴포넌트
function RetroMonitor({ position = [0, 0, 0] }) {
  const monitorRef = useRef();
  const screenRef = useRef();
  
  // 모니터 화면 깜빡임 효과
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (screenRef.current) {
      // 가끔씩 화면 깜빡임 효과
      screenRef.current.material.emissiveIntensity = 0.8 + Math.sin(time * 2) * 0.1;
      
      // 가끔 노이즈 효과
      if (Math.random() > 0.995) {
        screenRef.current.material.emissiveIntensity = 0.5 + Math.random() * 0.5;
      }
    }
  });

  return (
    <group position={position} ref={monitorRef}>
      {/* 모니터 본체 - 밝은 회색으로 변경 */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.8, 1.4, 0.1]} />
        <meshStandardMaterial color="#777777" roughness={0.5} metalness={0.3} />
      </mesh>
      
      {/* 모니터 베젤 - 더 밝은 색상으로 변경 */}
      <mesh position={[0, 0, 0.05]}>
        <boxGeometry args={[1.7, 1.3, 0.02]} />
        <meshStandardMaterial color="#555555" roughness={0.3} metalness={0.5} />
      </mesh>
      
      {/* 모니터 화면 - 흰색에서 초록색으로 변경 */}
      <mesh position={[0, 0, 0.06]} ref={screenRef}>
        <boxGeometry args={[1.6, 1.2, 0.01]} />
        <meshStandardMaterial 
          color="#00ff00" 
          emissive="#00ff00" 
          emissiveIntensity={0.8} 
          roughness={0.2}
        />
      </mesh>
      
      {/* 모니터 스탠드 - 밝은 색상으로 변경 */}
      <mesh position={[0, -0.8, -0.1]} castShadow>
        <boxGeometry args={[0.3, 0.2, 0.3]} />
        <meshStandardMaterial color="#666666" roughness={0.5} metalness={0.3} />
      </mesh>
      
      {/* 모니터 받침대 - 밝은 색상으로 변경 */}
      <mesh position={[0, -0.9, 0]} castShadow>
        <boxGeometry args={[0.8, 0.1, 0.5]} />
        <meshStandardMaterial color="#666666" roughness={0.5} metalness={0.3} />
      </mesh>
      
      {/* 모니터 주변 글로우 효과 추가 - 초록색으로 변경 */}
      <pointLight position={[0, 0, 0.2]} intensity={0.5} color="#00ff00" distance={1.5} />
    </group>
  );
}

// 레트로 키보드 컴포넌트
function RetroKeyboard({ position = [0, -1.2, 0.5] }) {
  return (
    <group position={position}>
      {/* 키보드 본체 - 더 밝은 색상으로 변경 */}
      <mesh castShadow>
        <boxGeometry args={[1.6, 0.1, 0.6]} />
        <meshStandardMaterial color="#aaaaaa" roughness={0.5} metalness={0.3} />
      </mesh>
      
      {/* 키보드 키들 (간략화) */}
      <group position={[0, 0.06, 0]}>
        {/* 키 행 생성 */}
        {[-0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6].map((x, rowIndex) => (
          <group key={`row-${rowIndex}`} position={[x, 0, 0]}>
            {[-0.2, 0, 0.2].map((z, colIndex) => (
              <mesh key={`key-${rowIndex}-${colIndex}`} position={[0, 0, z]} castShadow>
                <boxGeometry args={[0.15, 0.03, 0.15]} />
                <meshStandardMaterial 
                  color={Math.random() > 0.9 ? "#aaaaff" : "#ffffff"} 
                  roughness={0.3} 
                />
              </mesh>
            ))}
          </group>
        ))}
      </group>
    </group>
  );
}

// HTML 기반 터미널 텍스트 컴포넌트 - 제거하고 대신 스캔라인 효과 추가
function RetroScanlines({ position = [0, 0, 0.07] }) {
  return (
    <Html position={position} transform center distanceFactor={1.5}>
      <div style={{
        width: '500px',
        height: '375px',
        background: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.1) 50%)',
        backgroundSize: '100% 4px',
        pointerEvents: 'none',
        opacity: 0.5
      }}></div>
    </Html>
  );
}

// 3D 모델 뷰어 컴포넌트
function ModelViewer({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);
  
  return (
    <primitive 
      object={scene} 
      position={[0, 0, 1]} 
      scale={0.5} 
    />
  );
}

// 로딩 메시지 컴포넌트
function LoadingMessage() {
  return (
    <Html position={[0, 0, 1]} center>
      <div style={{ color: '#00ff00', fontFamily: 'DOSGothic, monospace' }}>
        Loading model...
      </div>
    </Html>
  );
}

// 컴퓨터 씬 컴포넌트
export function ComputerScene({ modelPath = null }) {
  const groupRef = useRef();
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  
  useEffect(() => {
    if (modelPath) {
      setIsModelLoaded(true);
    }
  }, [modelPath]);
  
  useFrame((state) => {
    if (groupRef.current) {
      // 부드러운 움직임 효과
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(time * 0.1) * 0.05;
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.05;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* 라이팅 설정 */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.0} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <spotLight 
        position={[0, 5, 5]} 
        intensity={1.0} 
        angle={0.3} 
        penumbra={0.8} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024}
      />
      
      {/* 레트로 컴퓨터 세트 */}
      <RetroMonitor position={[0, 0.5, 0]} />
      <RetroKeyboard />
      <RetroScanlines position={[0, 0.25, 0.07]} />
      
      {/* 3D 모델 뷰어 */}
      {modelPath && (
        <>
          {isModelLoaded ? (
            <ModelViewer modelPath={modelPath} />
          ) : (
            <LoadingMessage />
          )}
        </>
      )}
      
      {/* 바닥 */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#111111" roughness={0.8} metalness={0.2} />
      </mesh>
      
      {/* 카메라 컨트롤 */}
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        minPolarAngle={Math.PI/6}
        maxPolarAngle={Math.PI/2}
        minDistance={3}
        maxDistance={10}
      />
    </group>
  );
}

// 메인 컴퓨터 컴포넌트
export default function Computer({ modelPath = null }) {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 2 
    }}>
      <Canvas 
        shadows
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ComputerScene modelPath={modelPath} />
      </Canvas>
    </div>
  );
}