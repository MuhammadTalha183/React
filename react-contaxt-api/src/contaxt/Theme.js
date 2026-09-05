import {createContext , useContext} from "react";

export const ThemeContaxt = createContext({
    ThemeMode : "light",
    darkMode : ()=>  {},
    lightMode : ()=> {}
})

export const ThemeProvider = ThemeContaxt.Provider

export default function useTheme () {
    return useContext(ThemeProvider)
}