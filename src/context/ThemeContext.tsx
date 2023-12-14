'use client'

import {createContext, useState, useEffect, ReactNode} from "react";


interface ThemeContextType {
    theme: string;
    changeTheme: (theme: string) => void;
    checkDark: () => boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
                                  children,
                              }: {
    children: ReactNode
}) => {
    const [theme, setTheme] = useState("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
    }, []);

    if (!mounted) return <></>

    const changeTheme = (theme: string) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
    }

    const checkDark = () => {
        return theme === "dark";
    }


    return (
        <ThemeContext.Provider value={{theme, changeTheme, checkDark}}>
            {children}
        </ThemeContext.Provider>
    );
};