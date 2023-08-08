import { proxy } from "valtio";

const state = proxy({
  isHome: true,
  color: "#ffff00",
  isShirtLogo: true,
  isTexture: false,
  logoDecal: "./logoshirt.svg",
  fullDecal: "./logoshirt.svg",
});

export default state;
