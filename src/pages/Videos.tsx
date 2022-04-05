import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import { getTheme } from '../themes/Themes';
import { AfterEffect, Camtasia, Figma, Illustrator, Premiere } from '../ui/DesignTools';
import { Header } from '../ui/Header';
import { ProgressiveImg } from '../ui/Image';
import { APropos, Date, Outils, Perimetre, ProjectDescription, ProjectImage, Projet, TravailRealise } from '../ui/ProjectDetail';

export function Videos() {
    const theme = getTheme('animations')
    return <ThemeProvider theme={theme}>
        <Header>
            <ProgressiveImg src="/portfolio_elements/page6_videos/VIDEOS lettres.png"></ProgressiveImg>
        </Header>

        <Projet>
            <ProjectDescription>
                <APropos>
                    La création de cette vidéo a pour but de présenter le pôle data de Bercy Hub dont l'objectif est de développer l'usage de la donnée au sein du Ministère de l'économie, des Finances et de la Relance.<br></br>
                    <br></br>
                    La vidéo permettra de comprendre ce qu'est le pôle data, les enjeux et acteurs de celui-ci.
                </APropos>
                <TravailRealise>
                    - réflexion sur l'idée et le style<br></br>
                    - tournage des interviews<br></br>
                    - création d'un support graphique dans Illustrator<br></br>
                    - montage vidéo<br></br>
                    - préparation et intégration des sous-titres
                </TravailRealise>
                <Outils category="detail">
                    <Premiere />
                    <AfterEffect />
                    <Illustrator />
                    <Camtasia />
                </Outils >
                <Perimetre category="detail">
                    Création de la vidéo
                </Perimetre >
                <Date category="detail">
                    Nov.- Dec 2021
                </Date>
            </ProjectDescription>

            <ProjectImage>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page5_animation/Fromagr gif.gif" />
                </div>
            </ProjectImage>
        </Projet>

        <Projet reverse>


            <ProjectDescription>
                <APropos>
                    Cette vidéo a été créée dans le cadre d'une mission créative consistant à se présenter pendent l'une des étapes de recrutement d'une start-up de danse.<br></br>
                    <br></br>
                    Ce projet a été réalisé en deux jours.
                </APropos>
                <TravailRealise>
                    - rédaction du scénario<br></br>
                    - création des dessins pour l'arrière-plan<br></br>
                    - développement d'un personnage<br></br>
                    - tournage de plus de 1 000 images<br></br>
                    - montage vidéo
                </TravailRealise>
                <Outils category="detail">
                    <Camtasia />
                </Outils >
                <Perimetre category="detail">
                    Stop motion
                </Perimetre >
                <Date category="detail">
                    Nov. 2019
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