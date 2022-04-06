import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import { getTheme } from '../themes/Themes';
import { Header } from '../ui/Header';
import { ResponsiveImg } from '../ui/Image';
import { PhotoList, Row } from '../ui/PhotoList';
import p1 from "../../public/portfolio_elements/page7_photos/1.jpg"
import p2 from "../../public/portfolio_elements/page7_photos/2.jpg"
import p3 from "../../public/portfolio_elements/page7_photos/3.jpg"
import p4 from "../../public/portfolio_elements/page7_photos/4.jpg"
import p5 from "../../public/portfolio_elements/page7_photos/5.jpg"
import p6 from "../../public/portfolio_elements/page7_photos/6.jpg"
import p7 from "../../public/portfolio_elements/page7_photos/7.jpg"
import p8 from "../../public/portfolio_elements/page7_photos/8.jpg"
import p9 from "../../public/portfolio_elements/page7_photos/9.jpg"
import p10 from "../../public/portfolio_elements/page7_photos/10.jpg"
import p11 from "../../public/portfolio_elements/page7_photos/11.jpg"
import p12 from "../../public/portfolio_elements/page7_photos/12.jpg"
import p13 from "../../public/portfolio_elements/page7_photos/13.jpg"
import p14 from "../../public/portfolio_elements/page7_photos/14.jpg"
import p15 from "../../public/portfolio_elements/page7_photos/15.jpg"
import p16 from "../../public/portfolio_elements/page7_photos/16.jpg"
import p17 from "../../public/portfolio_elements/page7_photos/17.jpg"
import p18 from "../../public/portfolio_elements/page7_photos/18.jpg"
import lettres from "../../public/portfolio_elements/page7_photos/PHOTOS lettres.png"

export function Photos() {
    const theme = getTheme('web')
    const images = [
        [
            p1, p2, p3
        ],
        [
            p4, p5
        ],
        [
            p6, p7, p8
        ],
        [
            p9, p10
        ],
        [
            p11, p12, p13
        ],
        [
            p14, p15
        ],
        [
            p16, p17, p18
        ]
    ]
    const rows = images.map((imagesInRow, idxRow) => {
        const images = imagesInRow.map((src, idx) => <div key={idx + '-' + idxRow}>
            <ResponsiveImg src={src} sizes="(min-width: 1024px) 30vw, 100vw"></ResponsiveImg></div>)
        return <Row key={idxRow} direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={4}>{...images} </Row>
    })
    return <ThemeProvider theme={theme}>
        <Header>
            <ResponsiveImg src={lettres}></ResponsiveImg>
        </Header>

        <PhotoList direction="column" spacing={4}>
            {...rows}
        </PhotoList>

    </ThemeProvider>
}