import { createTheme } from "@mui/material";
import { animations } from "./animations";
import { bottomBar } from "./bottomBar";
import { common } from "./common";
import { graphique } from "./graphique";
import { landing } from "./landing";
import { logos } from "./logos";
import { mobile } from "./mobile";
import { presentation } from "./presentation";
import { typography } from "./typography";
import { videos } from "./videos";
import { web } from "./web";


const themes = {
    'landing': createTheme({ ...landing, ...common, typography: typography }),
    'presentation': createTheme({ ...presentation, ...common, typography: typography }),
    'web': createTheme({ ...web, ...common, typography: typography }),
    'mobile': createTheme({ ...mobile, ...common, typography: typography }),
    'graphique': createTheme({ ...graphique, ...common, typography: typography }),
    'animations': createTheme({ ...animations, ...common, typography: typography }),
    'videos': createTheme({ ...videos, ...common, typography: typography }),
    'logos': createTheme({ ...logos, ...common, typography: typography }),
    'bottomBar': createTheme({ ...bottomBar, ...common, typography: typography }),

}

export function getTheme(name: keyof typeof themes) {
    return themes[name]
}