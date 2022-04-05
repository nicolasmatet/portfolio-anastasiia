import { Stack, styled } from "@mui/material"

export const Row = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        maxWidth: "75vw",
    }
}))

export const PhotoList = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(8),
    alignItems: 'center',
}))