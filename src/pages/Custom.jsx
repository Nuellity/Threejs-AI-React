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

function Custom() {
  const snap = useSnapshot(state);
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
                  <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                ))}
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
                handleClick={() => {}}
                isActiveTab
                isFilterTab=""
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Custom;
