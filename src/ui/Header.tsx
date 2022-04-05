import { Stack, styled } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressiveImg } from './Image';


export const Logo = styled(Stack)(({ theme }) => ({
    cursor: 'pointer',
    color: theme.palette.text.primary,
    maxWidth: '300px'
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
    maxHeight: '4ch',
    maxWidth: '4ch',
    marginRight:'2ch'

}));


export function Header(props: any) {
    const { children } = props
    const navigate = useNavigate()
    return <HeaderContainer direction="row">
        <Logo onClick={() => navigate('/portfolio')}>
            <ProgressiveImg src="/portfolio_elements/logo_as.png" />
        </Logo>
        <Stack direction="row" style={{ alignItems: "center" }}>
            <IconRetourContainer>
                <ProgressiveImg src="/portfolio_elements/icone_retour.png" />
            </IconRetourContainer>
            <TitleContainer direction="row">
                {children}
            </TitleContainer>
        </Stack>
    </HeaderContainer>
}