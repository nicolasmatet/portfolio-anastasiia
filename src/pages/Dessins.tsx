import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import { getTheme } from '../themes/Themes';
import { Row, DessinList } from '../ui/DessinList';
import { Header } from '../ui/Header';
import { ResponsiveImg, ResponsiveImgContext } from '../ui/Image';
import i1 from "../../public/portfolio_elements/page8_dessins/1.jpg"
import i2 from "../../public/portfolio_elements/page8_dessins/2.jpg"
import i3 from "../../public/portfolio_elements/page8_dessins/3.jpg"
import i4 from "../../public/portfolio_elements/page8_dessins/4.jpg"
import i5 from "../../public/portfolio_elements/page8_dessins/5.jpg"
import i6 from "../../public/portfolio_elements/page8_dessins/6.jpg"
import i7 from "../../public/portfolio_elements/page8_dessins/7.jpg"
import i8 from "../../public/portfolio_elements/page8_dessins/8.jpg"
import i9 from "../../public/portfolio_elements/page8_dessins/9.jpg"
import i10 from "../../public/portfolio_elements/page8_dessins/10.jpg"
import i11 from "../../public/portfolio_elements/page8_dessins/11.jpg"
import i12 from "../../public/portfolio_elements/page8_dessins/12.jpg"
import letters from "../../public/portfolio_elements/page8_dessins/DESSINS lettres.png"
import { PhotoWithModal } from '../ui/PhotoList';

export function Dessins() {
    const theme = getTheme('web')
    const images = [
        [
            i1, i2, i3, i4
        ],
        [
            i5, i6, i7, i8

        ],
        [
            i9, i10, i11, i12

        ]
    ]
    const rows = images.map((imagesInRow, idxRow) => {
        const images = imagesInRow.map((src, idx) => <PhotoWithModal key={idx + '-' + idxRow}>
            <ResponsiveImg src={src}></ResponsiveImg></PhotoWithModal>)
        if (idxRow % 2) {
            images.unshift(<div style={{ flex: 2 }}></div>)
            images.push(<div style={{ flex: 2 }}></div>)
        }
        return <Row key={idxRow} direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 4, sm: 4, md: 8 }}>{...images} </Row>
    })
    return <ThemeProvider theme={theme}>
        <Header>
            <ResponsiveImg src={letters}></ResponsiveImg>
        </Header>
        <ResponsiveImgContext.Provider value={{ sizes: "(min-width: 1024px) 25vw, 100vw" }}>
            <DessinList direction="column" spacing={{ xs: 4, sm: 4, md: 8 }}>
                {...rows}
            </DessinList>
        </ResponsiveImgContext.Provider>
    </ThemeProvider>
}