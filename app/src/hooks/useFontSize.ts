import { useContext } from "react";
import { FontSizeContext, FontSizeDispatchContext } from "../contexts/FontSize";

export function useFontSize() {
  return useContext(FontSizeContext);
}

export function useFontSizeDispatch() {
  return useContext(FontSizeDispatchContext);
}
