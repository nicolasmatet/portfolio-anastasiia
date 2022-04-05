import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import { getTheme } from '../themes/Themes';
import { Header } from '../ui/Header';
import { ProgressiveImg } from '../ui/Image';
import { PhotoList, Row } from '../ui/PhotoList';



export function Photos() {
    const theme = getTheme('web')
    const images = [
        [
            "/portfolio_elements/page7_photos/1.jpg",
            "/portfolio_elements/page7_photos/2.jpg",
            "/portfolio_elements/page7_photos/3.jpg"
        ],
        [
            "/portfolio_elements/page7_photos/4.jpg",
            "/portfolio_elements/page7_photos/5.jpg",
        ],
        [
            "/portfolio_elements/page7_photos/6.jpg",
            "/portfolio_elements/page7_photos/7.jpg",
            "/portfolio_elements/page7_photos/8.jpg"
        ],
        [
            "/portfolio_elements/page7_photos/9.jpg",
            "/portfolio_elements/page7_photos/10.jpg",
        ],
        [
            "/portfolio_elements/page7_photos/11.jpg",
            "/portfolio_elements/page7_photos/12.jpg",
            "/portfolio_elements/page7_photos/13.jpg"
        ],
        [
            "/portfolio_elements/page7_photos/14.jpg",
            "/portfolio_elements/page7_photos/15.jpg",
        ],
        [
            "/portfolio_elements/page7_photos/16.jpg",
            "/portfolio_elements/page7_photos/17.jpg",
            "/portfolio_elements/page7_photos/18.jpg"
        ]
    ]
    const rows = images.map((imagesInRow, idxRow) => {
        const images = imagesInRow.map((src, idx) => <div key={idx + '-' + idxRow}> <ProgressiveImg src={src}></ProgressiveImg></div>)
        return <Row key={idxRow} direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={4}>{...images} </Row>
    })
    return <ThemeProvider theme={theme}>
        <Header>
            <ProgressiveImg src="/portfolio_elements/page7_photos/PHOTOS lettres.png"></ProgressiveImg>
        </Header>

        <PhotoList direction="column" spacing={4}>

            {...rows}
        </PhotoList>

    </ThemeProvider>
}