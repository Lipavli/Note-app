import React, { useState } from "react";
import colorOptions from "../color/colorOptions";

interface ColorPickerProps {
  color: string;
  setColor(color: string): void;
}

const ColorPicker = ({ color, setColor }: ColorPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleColorChange = (selectedColor: string) => {
    setColor(selectedColor);
    setIsOpen(false);
  };

  return (
    <div className="colorPicker">
      <div
        className="selected"
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: color }}
      >
      </div>
      <ul
        className={`options ${isOpen ? "active" : ""}`}
      >
        {colorOptions.map((color, index) => (
          <li
            key={index}
            className={`color color-${index + 1}`}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ColorPicker;
