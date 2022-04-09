import { Stack, styled } from "@mui/material"

export const Row = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        maxWidth: "75vw",
    },
    alignItems: 'center',
    '& div': { flexBasis: 'content' }
}))

export const DessinList = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(4),
    alignItems: 'center',
    maxWidth: '100%',
}))