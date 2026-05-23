import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PerspectiveCamera } from "@react-three/drei";

function Particles({ count = 50 }) {
  // Use a state initializer function. This is only called once during mounting.
  const [points] = useState(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 25;
      p[i * 3 + 1] = (Math.random() - 0.5) * 25;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  });

  const ref = useRef<THREE.Points>(null);

  useFrame(() => {
    if (!ref.current) return;
    const time = performance.now() / 1000;
    ref.current.rotation.y = time * 0.05;
    ref.current.rotation.x = time * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#D9C3A5"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

export function Scene3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-50">
      <Canvas gl={{ alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />
        <ambientLight intensity={1} />

        <Particles count={25} />
      </Canvas>
    </div>
  );
}
