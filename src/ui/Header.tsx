import { Stack, styled } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressiveImg, ResponsiveImg } from './Image';

import logo from "../../public/portfolio_elements/logo_as.png"
import retour from "../../public/portfolio_elements/icone_retour.png"

export const Logo = styled(Stack)(({ theme }) => ({
    cursor: 'pointer',
    color: theme.palette.text.primary,
    maxWidth: '400px'
}));

export const HeaderContainer = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
    },
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    backgroundColor: theme.palette.background.default
}));

const TitleContainer = styled(Stack)(({ theme }) => ({
    display: 'flex',
    maxWidth: '72ch',
    alignItems: 'center'
}));


const IconRetourContainer = styled(Stack)(({ theme }) => ({
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
        maxHeight: '2.5ch',
        maxWidth: '2.5ch',
        marginRight: theme.spacing(1)
    },
    [theme.breakpoints.up('sm')]: {
        maxHeight: '5ch',
        maxWidth: '5ch',
        marginRight: theme.spacing(2)

    },

}));


export function Header(props: any) {
    const { children, hideGoBack } = props
    const navigate = useNavigate()
    return <HeaderContainer direction="row">
        <Logo onClick={() => navigate('/')}>
            <ResponsiveImg src={logo} />
        </Logo>
        <Stack direction="row" style={{ alignItems: "center" }}>
            {!hideGoBack && <IconRetourContainer onClick={() => navigate('/portfolio')}>
                <ResponsiveImg src={retour} />
            </IconRetourContainer>}
            <TitleContainer direction="row">
                {children}
            </TitleContainer>
        </Stack>
    </HeaderContainer>
}