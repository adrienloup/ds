import { createContext, useState } from "react";
import { SlotType } from "../models/Slot";

export const FontSizeContext = createContext(0);
export const FontSizeDispatchContext = createContext({
  decreaseFontSize: () => {},
  increaseFontSize: () => {},
});

export const FontSizeProvider = ({ children }: SlotType) => {
  const [fontSize, setFontSize] = useState(16);

  const decreaseFontSize = () => {
    setFontSize((size) => (size > 16 ? size - 2 : size));
  };

  const increaseFontSize = () => {
    setFontSize((size) => (size < 20 ? size + 2 : size));
  };

  document.body.style.fontSize = fontSize + "px";

  return (
    <FontSizeContext.Provider value={fontSize}>
      <FontSizeDispatchContext.Provider
        value={{ decreaseFontSize, increaseFontSize }}
      >
        {children}
      </FontSizeDispatchContext.Provider>
    </FontSizeContext.Provider>
  );
};
