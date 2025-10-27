import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Theme } from "../utils/types";

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}>({ theme: "system", setTheme: () => {} });
