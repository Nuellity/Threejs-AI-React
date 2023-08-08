/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation, fadeAnimation } from "../config/motion";
import { download } from "../assets";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { useSnapshot } from "valtio";
import state from "../store";
import config from "../config/config";
import {
  AIPicker,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from "../components";
import { useState } from "react";

function Custom() {
  const snap = useSnapshot(state);
  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generateImg, setGenerateImg] = useState(false);
  const [activeEditTab, setActiveEditTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    styleShirt: false,
  });
  const tabContent = () => {
    switch (activeEditTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "aipicker":
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generateImg={generateImg}
            handleSubmit={handleSubmit}
          />
        );

      default:
        return null;
    }
  };

  const handleSubmit = async (type) => {
    if (!prompt) return alert("Please enter a prompt.");
    try {
      setGenerateImg(true);
      const res = await fetch("https://shoe-api-mlha.onrender.com/api/dalle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      handleDecals(type, `data:image/png;base64, ${data.b64json}`);
    } catch (error) {
      alert(error);
    } finally {
      setGenerateImg(false);
      setActiveEditTab("");
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isShirtLogo = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isShirtLogo = true;
        state.isTexture = false;
    }
    setActiveFilterTab((prev) => {
      return {
        ...prev,
        [tabName]: !prev[tabName],
      };
    });
  };

  const handleDecals = (type, data) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = data;
    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const readFile = (type) => {
    reader(file).then((data) => {
      handleDecals(type, data);
      setActiveEditTab("");
    });
  };

  return (
    <AnimatePresence>
      {!snap.isHome && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            {" "}
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => {
                      if (activeEditTab === tab.name) {
                        setActiveEditTab("");
                      } else {
                        setActiveEditTab(tab.name);
                      }
                    }}
                  />
                ))}
                {tabContent()}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              handleClick={() => (state.isHome = true)}
              title="Go Back"
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
                isFilterTab
              />
            ))}
            <button className="download-btn" onClick={downloadCanvasToImage}>
              <img
                src={download}
                alt="download_image"
                className="w-3/5 h-3/5 object-contain"
              />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Custom;
