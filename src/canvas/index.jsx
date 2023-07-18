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
      <Canvas>
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <Center>
            <Shirt />
          </Center>
        </CameraRig>

        {/* <Backdrop /> */}
      </Canvas>
    </div>
  );
};

export default CanvasModel;
