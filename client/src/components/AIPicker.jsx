/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import CustomButton from "./CustomButton";

function AIPicker({ prompt, setPrompt, generateImg, handleSubmit }) {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI.."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3 ">
        {generateImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={(e) => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full Image"
              handleClick={(e) => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default AIPicker;
