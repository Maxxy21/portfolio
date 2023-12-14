'use client'

import {createContext, useState, useEffect, ReactNode} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({
                                  children,
                              }: {
    children: ReactNode
}) => {
    const [theme, setTheme] = useState("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
    }, []);

    // if (!mounted) return <>Loading...</>

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