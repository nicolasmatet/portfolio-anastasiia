import { ThemeProvider } from '@emotion/react';
import { Button, CssBaseline, Stack } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { getTheme } from '../themes/Themes';


export function LandingPage() {
    const theme = getTheme('landing')
    const navigate = useNavigate()
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
                <Button variant="outlined" sx={{ flex: 1, paddingLeft: '16px', paddingRight: '16px' }} href='/presentation' >
                    ABOUT ME
                </Button>
                <Button variant="contained" sx={{ flex: 1, paddingLeft: '16px', paddingRight: '16px' }}>
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