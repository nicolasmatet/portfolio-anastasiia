import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import { getTheme } from '../themes/Themes';
import { Row, PhotoList } from '../ui/DessinList';
import { Header } from '../ui/Header';
import { ProgressiveImg } from '../ui/Image';



export function Dessins() {
    const theme = getTheme('web')
    const images = [
        [
            "/portfolio_elements/page8_dessins/1.jpg",
            "/portfolio_elements/page8_dessins/2.jpg",
            "/portfolio_elements/page8_dessins/3.jpg",
            "/portfolio_elements/page8_dessins/4.jpg"
        ],
        [
            "/portfolio_elements/page8_dessins/5.jpg",
            "/portfolio_elements/page8_dessins/6.jpg",
            "/portfolio_elements/page8_dessins/7.jpg",
            "/portfolio_elements/page8_dessins/8.jpg",

        ],
        [
            "/portfolio_elements/page8_dessins/9.jpg",
            "/portfolio_elements/page8_dessins/10.jpg",
            "/portfolio_elements/page8_dessins/11.jpg",
            "/portfolio_elements/page8_dessins/12.jpg",

        ]
    ]
    const rows = images.map((imagesInRow, idxRow) => {
        const images = imagesInRow.map((src, idx) => <div style={{ flex: 10 }} key={idx + '-' + idxRow}> <ProgressiveImg src={src}></ProgressiveImg></div>)
        if (idxRow % 2) {
            images.unshift(<div style={{ flex: 2 }}></div>)
            images.push(<div style={{ flexGrow: 2 }}></div>)
        }
        return <Row key={idxRow} direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 4, sm: 4, md: 8 }}>{...images} </Row>
    })
    return <ThemeProvider theme={theme}>
        <Header>
            <ProgressiveImg src="/portfolio_elements/page8_dessins/DESSINS lettres.png"></ProgressiveImg>
        </Header>

        <PhotoList direction="column" spacing={{ xs: 4, sm: 4, md: 8 }}>
            {...rows}
        </PhotoList>

    </ThemeProvider>
}