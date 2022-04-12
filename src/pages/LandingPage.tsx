import { ThemeProvider } from '@emotion/react';
import { Button, CssBaseline, Stack, styled, Typography } from '@mui/material';
import * as React from 'react';
import { getTheme } from '../themes/Themes';

const PresentationButton = styled(Button)(({ theme }) => ({
    flex: 1,
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    lineHeight: 1.7,
    whiteSpace: 'nowrap'
}))

export function LandingPage() {
    const theme = getTheme('landing')
    return <ThemeProvider theme={theme}>
        <CssBaseline />

        <Stack direction="column"
            style={{
                marginTop: '128px',
            }}>
            <Stack direction={{ xs: "column", sm: "column", md: "column", lg: "row" }} spacing={{ xs: 4, sm: 4, md: 4, lg: 8 }}
                style={{
                    margin: 'auto',
                    display: 'flex',
                }}>
                <PresentationButton variant="outlined" href='/presentation' >
                    À PROPOS DE MOI
                </PresentationButton>
                <PresentationButton variant="contained" href='/portfolio'>
                    PORTFOLIO
                </PresentationButton>
            </Stack>
        </Stack>
        <iframe
            style={{
                position: 'absolute',
                top: 0,
                zIndex: -1,
            }}
            src='https://my.spline.design/3dpourlesite-7cffd9debe969123e0ffaa146ea56b6a/' frameBorder='0' width='100%' height='100%'></iframe>

    </ThemeProvider>

}