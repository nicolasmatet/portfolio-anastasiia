import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import { getTheme } from '../themes/Themes';
import { Header } from '../ui/Header';
import { ResponsiveImg } from '../ui/Image';
import { PhotoList, Row } from '../ui/PhotoList';
import p0 from "../../public/portfolio_elements/page7_photos/000.jpg"
import p1 from "../../public/portfolio_elements/page7_photos/000.jpg"
import p2 from "../../public/portfolio_elements/page7_photos/002.jpg"
import p3 from "../../public/portfolio_elements/page7_photos/003.jpg"
import p4 from "../../public/portfolio_elements/page7_photos/004.jpg"
import p5 from "../../public/portfolio_elements/page7_photos/005.jpg"
import p6 from "../../public/portfolio_elements/page7_photos/006.jpg"
import p7 from "../../public/portfolio_elements/page7_photos/007.jpg"
import p8 from "../../public/portfolio_elements/page7_photos/008.jpg"
import p9 from "../../public/portfolio_elements/page7_photos/009.jpg"
import p10 from "../../public/portfolio_elements/page7_photos/010.jpg"
import p11 from "../../public/portfolio_elements/page7_photos/011.jpg"
import p12 from "../../public/portfolio_elements/page7_photos/012.jpg"
import p13 from "../../public/portfolio_elements/page7_photos/013.jpg"
import p14 from "../../public/portfolio_elements/page7_photos/014.jpg"
import p15 from "../../public/portfolio_elements/page7_photos/015.jpg"
import p16 from "../../public/portfolio_elements/page7_photos/016.jpg"
import p17 from "../../public/portfolio_elements/page7_photos/017.jpg"
import lettres from "../../public/portfolio_elements/page7_photos/PHOTOS lettres.png"

export function Photos() {
    const theme = getTheme('web')
    const images = [
        [
            p0, p1, p2
        ],
        [
            p3, p4
        ],
        [
            p5, p6, p7
        ],
        [
            p8, p9
        ],
        [
            p10, p11, p12
        ],
        [
            p13, p14
        ],
        [
            p15, p16, p17
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