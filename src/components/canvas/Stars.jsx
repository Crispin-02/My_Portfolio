import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// Constants for configuration
const STARS_COUNT = 15000;  // Number of stars
const STAR_COLOR = '#f272c8'; // Color of stars
const SPHERE_RADIUS = 1.2;   // Radius of the sphere

const Stars = (props) => {
  const ref = useRef();
  // Using a constant for stars count and radius
  const [sphere] = useState(() => random.inSphere(new Float32Array(STARS_COUNT), { radius: SPHERE_RADIUS }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;  // Star rotation
    ref.current.rotation.y -= delta / 15;  // Star rotation
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={STAR_COLOR} // Using constant for color
          size={0.001}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
