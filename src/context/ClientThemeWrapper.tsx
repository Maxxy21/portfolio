'use client'

import {ReactNode, useContext} from "react";
import {ThemeContext} from "./ThemeContext";

export default function ClientThemeWrapper({
                                               children,
                                           }: {
    children: ReactNode
}) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error('ThemeContext is not defined');
    }

    const {theme} = themeContext;
    return <div data-theme={theme}>{children}</div>
}