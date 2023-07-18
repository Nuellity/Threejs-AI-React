import { proxy } from "valtio";

const state = proxy({
  isHome: true,
  color: "#EFBD48",
  isShirtLogo: true,
  isTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
