/* eslint-disable react/prop-types */
import { useSnapshot } from "valtio";
import state from "../store";

const CustomButton = ({ title, customStyles, handleClick, type }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
    >
      {title}
    </button>
  );
};

export default CustomButton;
