import { ThemeProvider } from '@emotion/react';
import { Stack, styled } from '@mui/material';
import * as React from 'react';
import { getTheme } from '../themes/Themes';
import { SocialLinks } from './SocialLinks';

export const BottomBar = styled(BottomBarComposant)(({ theme }) => ({
    justifyContent: 'center',
    alignItems: 'center',
    height: '72px',
    fontSize: '32px',
    backgroundColor: theme.palette.background.default

}));

function BottomBarComposant(props: any) {
    const theme = getTheme('bottomBar')
    return <ThemeProvider theme={theme}>
        <Stack {...props} >
            <SocialLinks />
        </Stack>
    </ThemeProvider>
}