/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import { useSnapshot } from "valtio";
import state from "../store";

const CanvasModel = () => {
  const snap = useSnapshot(state);
  return (
    <div
      className={`flex justify-center items-center h-screen w-screen ${
        snap.isHome && "pt-[12em] md:pt-0"
      }`}
    >
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 23 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
    </div>
  );
};

export default CanvasModel;
