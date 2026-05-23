import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, Text, RoundedBox, Environment } from '@react-three/drei';
import * as THREE from 'three';

const goldColor = "#D4AF37";
const darkCardColor = "#0A0A0A";

function ZenCard() {
  const meshRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  
  useFrame(() => {
    if (!meshRef.current) return;
    const time = performance.now() / 1000;
    
    // Auto-rotation
    const autoRotY = Math.sin(time * 0.4) * 0.15;
    const autoRotX = Math.cos(time * 0.2) * 0.08;
    
    // Mouse Parallax (subtle following)
    const targetRotY = autoRotY + (mouse.x * 0.2);
    const targetRotX = autoRotX - (mouse.y * 0.2);
    
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.1);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.1);
    
    meshRef.current.position.y = Math.sin(time * 0.6) * 0.05;
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
      <group ref={meshRef}>
        {/* Main Card Body */}
        <RoundedBox args={[3.8, 2.4, 0.08]} radius={0.12} smoothness={4}>
          <meshStandardMaterial 
            color={darkCardColor} 
            roughness={0.15} 
            metalness={0.9}
            envMapIntensity={2}
          />
        </RoundedBox>

        {/* Gold Border Edge */}
        <mesh position={[0, 0, 0.041]}>
          <planeGeometry args={[3.75, 2.35]} />
          <meshStandardMaterial 
            color={goldColor} 
            wireframe 
            transparent 
            opacity={0.4}
            metalness={1}
            roughness={0.1}
          />
        </mesh>

        {/* --- Card Content Front --- */}
        <group position={[0, 0, 0.045]}>
          
          {/* Subtle Watermark "ZT" */}
          <Text
            position={[0.4, -0.2, -0.01]}
            fontSize={2.2}
            color={goldColor}
            anchorX="center"
            anchorY="middle"
          >
            ZT
            <meshBasicMaterial transparent opacity={0.03} />
          </Text>

          {/* Top Left: ZT Logo */}
          <group position={[-1.4, 0.8, 0]}>
             <Text
              fontSize={0.5}
              color={goldColor}
              anchorX="center"
            >
              ZT
            </Text>
            <group position={[1.0, 0.05, 0]}>
              <Text
                fontSize={0.18}
                color={goldColor}
                letterSpacing={0.2}
                anchorX="left"
              >
                ZEN TONES
              </Text>
              <Text
                position={[0.3, -0.15, 0]}
                fontSize={0.07}
                color={goldColor}
                letterSpacing={0.4}
                anchorX="left"
              >
                WOMEN SALON
              </Text>
            </group>
          </group>

          {/* Top Right: Crown Icon Box */}
          <group position={[1.4, 0.8, 0]}>
            <RoundedBox args={[0.4, 0.4, 0.02]} radius={0.05}>
              <meshStandardMaterial color={goldColor} metalness={1} roughness={0.2} />
            </RoundedBox>
            <Text
              position={[0, 0, 0.02]}
              fontSize={0.2}
              color={darkCardColor}
              anchorX="center"
              anchorY="middle"
            >
              👑
            </Text>
          </group>

          {/* Middle: PREMIUM MEMBERSHIP */}
          <group position={[0, 0.1, 0]}>
             <Text
              fontSize={0.12}
              color={goldColor}
              letterSpacing={0.4}
              anchorX="center"
            >
              PREMIUM MEMBERSHIP
            </Text>
            <mesh position={[0, -0.12, 0]}>
              <planeGeometry args={[1.5, 0.005]} />
              <meshBasicMaterial color={goldColor} transparent opacity={0.5} />
            </mesh>
            <Text
              position={[0, -0.12, 0.01]}
              fontSize={0.06}
              color={goldColor}
            >
              ✦
            </Text>
          </group>

          {/* Middle Left: Gold Chip */}
          <group position={[-1.4, -0.4, 0]}>
            <RoundedBox args={[0.5, 0.35, 0.01]} radius={0.04}>
              <meshStandardMaterial color={goldColor} metalness={1} roughness={0.3} emissive={goldColor} emissiveIntensity={0.2} />
            </RoundedBox>
            <mesh position={[0, 0, 0.01]}>
              <planeGeometry args={[0.4, 0.25]} />
              <meshBasicMaterial color={darkCardColor} wireframe />
            </mesh>
          </group>

          {/* Middle Center: Card Number */}
          <Text
            position={[0.2, -0.4, 0]}
            fontSize={0.16}
            color={goldColor}
            letterSpacing={0.2}
            anchorX="center"
          >
            ****  ****  ****  2024
          </Text>

          {/* Bottom Left: Card Holder */}
          <group position={[-1.6, -0.9, 0]}>
            <Text
              fontSize={0.07}
              color={goldColor}
              anchorX="left"
            >
              CARD HOLDER
              <meshBasicMaterial transparent opacity={0.6} />
            </Text>
            <Text
              position={[0, -0.15, 0]}
              fontSize={0.14}
              color={goldColor}
              letterSpacing={0.1}
              anchorX="left"
            >
              ZENTONEZ MEMBER
            </Text>
          </group>

          {/* Bottom Right: Expiry */}
          <group position={[1.6, -0.9, 0]}>
            <Text
              fontSize={0.07}
              color={goldColor}
              anchorX="right"
            >
              EXPIRES
              <meshBasicMaterial transparent opacity={0.6} />
            </Text>
            <Text
              position={[0, -0.15, 0]}
              fontSize={0.14}
              color={goldColor}
              anchorX="right"
            >
              12/25
            </Text>
          </group>

        </group>
      </group>
    </Float>
  );
}

export const MembershipCard3D = () => {
  return (
    <div className="w-full h-[400px] lg:h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas shadows={{ type: THREE.PCFShadowMap }} dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
        <Environment preset="city" />
        <ambientLight intensity={0.2} />
        
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-2, 1, 2]} intensity={0.5} color={goldColor} />
        
        <ZenCard />
      </Canvas>
    </div>
  );
};
