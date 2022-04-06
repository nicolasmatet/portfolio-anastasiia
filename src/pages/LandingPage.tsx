import { ThemeProvider } from '@emotion/react';
import { Button, CssBaseline, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { getTheme } from '../themes/Themes';


export function LandingPage() {
    const theme = getTheme('landing')
    return <ThemeProvider theme={theme}>
        <CssBaseline />

        <Stack direction="column"
            style={{
                marginTop: '128px',
            }}>
            <Stack direction={{ sm: "column", md: "column", lg: "row" }} spacing={{ sm: 4, md: 4, lg: 8 }}
                style={{
                    margin: 'auto',
                    display: 'flex',
                }}>
                <Button variant="outlined" sx={{ flex: 1, paddingLeft: 8, paddingRight: 8 }} href='/presentation' >
                    ABOUT ME
                </Button>
                <Button variant="contained" sx={{ flex: 1, paddingLeft: 8, paddingRight: 8 }} href='/portfolio'>
                    PORTFOLIO
                </Button>
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