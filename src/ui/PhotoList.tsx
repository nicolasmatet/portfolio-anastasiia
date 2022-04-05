import { Stack, styled } from "@mui/material"

export const Row = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        maxWidth: "50vw",
    },
    "& *": { flex: 1 }
}))

export const PhotoList = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(8),
    alignItems: 'center'
}))