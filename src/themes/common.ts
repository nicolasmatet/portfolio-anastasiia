import { ThemeOptions } from "@mui/material";

export const common: ThemeOptions = {
    shape: {
        borderRadius: 8,
    },
    spacing: 8,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 700
                },
                outlined: {
                    border: '2px solid',
                    '&:hover': {
                        border: '2px solid'
                    }
                }
            },
        },
    },
};