import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import { getTheme } from '../themes/Themes';
import { AfterEffect, Figma, Illustrator } from '../ui/DesignTools';
import { Header } from '../ui/Header';
import { ProgressiveImg, ResponsiveImg } from '../ui/Image';
import { APropos, Date, Outils, Perimetre, ProjectDescription, ProjectImage, Projet, TravailRealise } from '../ui/ProjectDetail';
import letters from "../../public/portfolio_elements/page5_animation/ANIMATION lettres.png"

export function Animations() {
    const theme = getTheme('animations')
    return <ThemeProvider theme={theme}>
        <Header>
            <ResponsiveImg src={letters}></ResponsiveImg>
        </Header>

        <Projet>
            <ProjectDescription>
                <APropos>
                    Cette animation a été créée pour le projet Fromagr pour le promouvoir sur sur les réseaux sociaux.<br></br>
                    fromagr.fr est une application pour faire des associations entre vins et fromages.<br></br>
                    <br></br>
                    Les illustrations ont été récupérées à partir de sources dont les droits sont libres.

                </APropos>
                <TravailRealise>
                    - développement du concept<br></br>
                    - sélection et correction des illustrations<br></br>
                    - création de compositions<br></br>
                    - réalisation de l'animation dans After Effects
                </TravailRealise>
                <Outils category="detail">
                    <AfterEffect />
                    <Illustrator />
                </Outils >
                <Perimetre category="detail">
                    Animation
                </Perimetre >
                <Date category="detail">
                    Mars 2022
                </Date>
            </ProjectDescription>

            <ProjectImage>
                <iframe
                    width="560" height="315" src="https://www.youtube.com/embed/LlkLujvfkz0"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </ProjectImage>
        </Projet>

        <Projet reverse>


            <ProjectDescription>
                <APropos>
                    Lorsque certains éléments de l'interface du prototype sont animés, cela constitue une jolie décoration pour le case sur Behance. <br></br>
                    <br></br>
                    C'est l'occasion de montrer en détail comment la navigation réagit au curseur de la souris ou à d'autres éléments. Il ajoute le plus grand réalisme et, en général, ce sont les cases où l'animation est de qualité qui retiennent le plus l'attention.
                </APropos>
                <TravailRealise>
                    - développement du concept<br></br>
                    - récupération des prototypes à partir de Figma<br></br>
                    - sélection des mockups<br></br>
                    - réalisation de l'animation dans After Effects
                </TravailRealise>
                <Outils category="detail">
                    <AfterEffect />
                    <Illustrator />
                    <Figma />
                </Outils >
                <Perimetre category="detail">
                    Animation
                </Perimetre >
                <Date category="detail">
                    Mars 2022
                </Date>
            </ProjectDescription>

            <ProjectImage>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page5_animation/06 Wareframes gif.gif" />
                </div>
            </ProjectImage>

        </Projet>

    </ThemeProvider>
}