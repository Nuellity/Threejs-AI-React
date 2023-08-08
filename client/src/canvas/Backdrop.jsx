import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef } from "react";

function Backdrop() {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        ambient={0.25}
        amount={4}
        radius={9}
        intensity={0.5}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        ambient={0.8}
        amount={5}
        radius={9}
        intensity={0.25}
        position={[6, 8, -5]}
      />
    </AccumulativeShadows>
  );
}

export default Backdrop;
