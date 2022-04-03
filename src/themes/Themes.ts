import { createTheme } from "@mui/material";
import { common } from "./common";
import { landing } from "./landing";
import { light } from "./light";
import { presentation } from "./presentation";
import { typography } from "./typography";


const themes = {
    'landing': createTheme({ ...landing, ...common, typography: typography }),
    'presentation': createTheme({ ...presentation, ...common, typography: typography }),
    'light': createTheme({ ...light, ...common, typography: typography })
}

export function getTheme(name: keyof typeof themes) {
    return themes[name]
}