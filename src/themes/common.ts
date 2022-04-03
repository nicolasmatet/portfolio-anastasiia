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
                    border: '2px solid',
                    '&:hover': {
                        border: '2px solid',
                    },
                    fontWeight: 700
                },
            },
        },
    },
};