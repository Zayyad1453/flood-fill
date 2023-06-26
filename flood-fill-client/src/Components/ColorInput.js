import React, { useState } from "react";
import { BlockPicker } from "react-color";

const ColorInput = ({ value, onChange, index = null }) => {
  const [openPicker, setOpenPicker] = useState(false);
  const handleChange = (color) => {
    setOpenPicker(false);
    onChange(color, null, index);
  };
  return (
    <div className="color-input">
      <input type="text" value={value} onMouseUp={() => setOpenPicker(true)} onChange={() => {}} />
      {openPicker && <BlockPicker color={value} onChangeComplete={(color) => handleChange(color)} />}
    </div>
  );
};

export default ColorInput;
