import { ThemeProvider } from '@emotion/react';
import { Stack, styled } from '@mui/material';
import * as React from 'react';
import { getTheme } from '../themes/Themes';
import { SocialLinks } from './SocialLinks';

export const BottomBarWrapper = styled(Stack)(({ theme }) => ({
    justifyContent: 'center',
    alignItems: 'center',
    height: '72px',
    fontSize: '32px',
    backgroundColor: theme.palette.background.paper

}));

export function BottomBar(props: any) {
    const theme = getTheme('bottomBar')
    return <ThemeProvider theme={theme}>
        <BottomBarWrapper >
            <SocialLinks />
        </BottomBarWrapper>
    </ThemeProvider>
}