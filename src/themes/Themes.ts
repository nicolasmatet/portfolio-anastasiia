import { createTheme } from "@mui/material";
import { common } from "./common";
import { landing } from "./landing";
import { presentation } from "./presentation";
import { typography } from "./typography";
import { web } from "./web";


const themes = {
    'landing': createTheme({ ...landing, ...common, typography: typography }),
    'presentation': createTheme({ ...presentation, ...common, typography: typography }),
    'web': createTheme({ ...web, ...common, typography: typography })
}

export function getTheme(name: keyof typeof themes) {
    return themes[name]
}