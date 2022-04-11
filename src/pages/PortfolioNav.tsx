import { Stack, styled, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import letters from "../../public/portfolio_elements/page_portfolio_nav/PORTFOLIO lettres.png";
import { PageList } from '../PageList';
import { getTheme } from '../themes/Themes';
import { Header } from '../ui/Header';
import { ResponsiveImg } from '../ui/Image';

const EntryImageWrapper = styled(Stack)(({ theme }) => ({
    cursor: 'pointer',
    [theme.breakpoints.up('lg')]: {
        width: "30ch",
    },
    [theme.breakpoints.only('md')]: {
        width: "30ch",
    },
    [theme.breakpoints.down('md')]: {
        width: "30ch",
    },
}))

const PortfolioNavWrapper = styled(Stack)(({ theme }) => ({
    margin: "auto",
    overflow: 'hidden',
    flexWrap: "wrap",
    justifyContent: "start",
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(4)
    },
    [theme.breakpoints.down('md')]: {
        paddingBottom: theme.spacing(2)
    },
}))


const EntryTitleWrapper = styled(Stack)(({ theme }) => ({
    marginTop: "-0.5ch",
}))

function PortfolioEntry(props: { image: string, title: string, onClick: any }) {
    const { title, image, onClick } = props;
    return <Stack onClick={onClick}>
        <EntryImageWrapper>
            <div>
                <ResponsiveImg src={image} sizes="(min-width: 1024px) 15vw, 100vw"></ResponsiveImg>
            </div>
        </EntryImageWrapper>
        <EntryTitleWrapper>
            <Typography variant='caption'>
                {title}
            </Typography>
        </EntryTitleWrapper>
    </Stack>
}
export function PortfolioNav() {
    const theme = getTheme('web');
    const navigate = useNavigate();

    const entriesData = [
        [PageList[0], PageList[1], PageList[2], PageList[3]],
        [PageList[4], PageList[5], PageList[6], PageList[7]]
    ]
    const entries = entriesData.map((entriesDataInRow, rowIdx) => {
        const entriesInRow = entriesDataInRow.map(
            (entryData) => <PortfolioEntry onClick={() => navigate(entryData.route.path)} key={entryData.route.path} {...entryData.data} />)
        return <Stack key={rowIdx} direction={{ xs: "column", sm: "column", md: "column", lg: "row" }} spacing={4}>{...entriesInRow}</Stack>
    })
    return <ThemeProvider theme={theme}>
        <Header hideGoBack>
            <ResponsiveImg src={letters}></ResponsiveImg>
        </Header>
        <PortfolioNavWrapper direction="column" spacing={4}>
            {...entries}
        </PortfolioNavWrapper>
    </ThemeProvider>

}