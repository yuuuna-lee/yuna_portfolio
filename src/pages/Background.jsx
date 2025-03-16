import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars({ zoom, ...props }) {
  const ref = useRef();
  const glowRef = useRef();
  
  // 별의 수 증가 (더 많은 별 생성)
  const [positions, glowPositions] = useMemo(() => {
    // 일반 별의 수 증가
    const positions = new Float32Array(10000 * 3); // 10000개로 증가
    
    // 일반 별 생성 - 더 넓은 범위에 분포
    for (let i = 0; i < 10000; i++) {
      // 별들이 더 넓은 범위에 분포하도록 조정
      const distance = Math.random() * 4.0 + 0.1; // 0.1~4.1 범위로 확장
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      let x = distance * Math.sin(phi) * Math.cos(theta);
      let y = distance * Math.sin(phi) * Math.sin(theta);
      let z = distance * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    
    // 빛나는 별의 수도 증가
    const glowPositions = new Float32Array(200 * 3); // 200개로 증가
    
    // 빛나는 별 생성 - 더 넓은 범위에 분포
    for (let i = 0; i < 200; i++) {
      const distance = Math.random() * 3.5 + 0.2; // 0.2~3.7 범위로 확장
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      let x = distance * Math.sin(phi) * Math.cos(theta);
      let y = distance * Math.sin(phi) * Math.sin(theta);
      let z = distance * Math.cos(phi);
      
      glowPositions[i * 3] = x;
      glowPositions[i * 3 + 1] = y;
      glowPositions[i * 3 + 2] = z;
    }
    
    return [positions, glowPositions];
  }, []);
  
  // 텍스처 로드 추가
  const glowTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    
    // 그라데이션 생성 (중앙에서 바깥쪽으로 흐려지는)
    const gradient = context.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, canvas.width / 2
    );
    
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');    // 중앙 투명도 감소
    gradient.addColorStop(0.2, 'rgba(255, 221, 102, 0.6)');  // 투명도 감소
    gradient.addColorStop(0.5, 'rgba(255, 221, 102, 0.3)');  // 투명도 감소
    gradient.addColorStop(1, 'rgba(255, 221, 102, 0)');      // 완전 투명
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // 자동 회전 및 줌 효과 적용
  useFrame((state, delta) => {
    // 자동 회전 효과 - 속도 감소
    ref.current.rotation.z += 0.0015;
    glowRef.current.rotation.z += 0.0015;
    
    // 빛나는 효과 애니메이션 (크기 변화 및 투명도 변화)
    const time = state.clock.getElapsedTime();
    glowRef.current.material.size = 0.15 + Math.sin(time * 1.5) * 0.05;
    
    // 투명도도 함께 변화하도록 추가
    glowRef.current.material.opacity = 0.5 + Math.sin(time * 1.2) * 0.2; // 0.3~0.7 사이 변화
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} scale={zoom}>
      {/* 일반 별 */}
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.010} // 별 크기를 더 작게 조정
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.7} // 투명도 추가
        />
      </Points>
      
      {/* 빛나는 노란 별 - 텍스처 적용 */}
      <Points ref={glowRef} positions={glowPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffdd66" // 노란색 계열
          size={0.15} // 크기 증가
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.5} // 기본 투명도 감소 (0.8 → 0.5)
          map={glowTexture} // 그라데이션 텍스처 적용
        />
      </Points>
    </group>
  );
}

export default function Background({ zoom = 1 }) {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#000000' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars zoom={zoom} />
      </Canvas>
    </div>
  );
}
