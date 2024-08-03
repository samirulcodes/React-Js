import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    // deafult object and there is a value
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// custom hooks
export default function useTheme(){
    return useContext(ThemeContext)
}