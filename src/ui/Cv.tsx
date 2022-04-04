import { Stack, styled } from "@mui/material";

export const SquarePrimary = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    [theme.breakpoints.up('sm')]: {
        alignItems: 'start',
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
    }
}));

export const CVGrid = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',

    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
        'div:nth-of-type(2n+1)': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.secondary,
        }
    },
    [theme.breakpoints.up('sm')]: {
        'div:nth-of-type(3n+1)': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.secondary,
        }
    }
}));

export const CVSquare = styled(Stack)(({ theme }) => ({
    minWidth: '32ch',
    display: 'flex',
    flex: 1,
    border: '1px solid',
    borderColor: theme.palette.text.primary,
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),

    },
    [theme.breakpoints.up('md')]: {
        height: '24ch',
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.up('sm')]: {
        minWidth: '64ch'
    },
    'h4:nth-of-type(1)': {
        marginBottom: theme.spacing(2),
    },
}));
