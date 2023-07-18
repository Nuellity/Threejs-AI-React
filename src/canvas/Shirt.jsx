/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "../store";
import { useGLTF, useTexture } from "@react-three/drei";

function Shirt() {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      ></mesh>
    </group>
  );
}

export default Shirt;
