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
            <Stack direction="row" spacing={8}
                style={{
                    margin: 'auto',
                    display: 'flex',
                }}>
                <Button variant="outlined" sx={{ flex: 1, paddingLeft: 8, paddingRight: 8 }} href='/presentation' >
                    <Typography variant="h6">
                        ABOUT ME
                    </Typography>
                </Button>
                <Button variant="contained" sx={{ flex: 1, paddingLeft: 8, paddingRight: 8 }} href='/portfolio'>
                    <Typography variant="h6">
                        PORTFOLIO
                    </Typography>

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