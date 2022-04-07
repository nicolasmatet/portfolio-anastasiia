import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import { getTheme } from '../themes/Themes';
import { AfterEffect, Figma, Illustrator, Premiere } from '../ui/DesignTools';
import { Header } from '../ui/Header';
import { ProgressiveImg, ResponsiveImg } from '../ui/Image';
import { APropos, Date, Outils, Perimetre, ProjectDescription, ProjectImage, Projet, TravailRealise } from '../ui/ProjectDetail';
import lettres from "../../public/portfolio_elements/page4_logos/logos_ lettres.png"
import projet_tomorrow from "../../public/portfolio_elements/page4_logos/projet_logos.png"
import jardin_numerique from "../../public/portfolio_elements/page4_logos/projet_jardin_numerique.png"

export function Logos() {
    const theme = getTheme('logos')
    return <ThemeProvider theme={theme}>
        <Header>
            <ResponsiveImg src={lettres} />
        </Header>

        <Projet>
            <ProjectDescription url="/">
                <APropos>

                    Ce projet a été réalisé dans le cadre d'un cours de graphisme pour l'association Les Jardins numériques.<br></br>
                    <br></br>
                    Les Jardins numériques est engagée contre la fracture numérique et sociale, avec une orientation solidaire et citoyenne dans ses projets numériques.
                </APropos>
                <TravailRealise>
                    - stratégie de marque<br></br>
                    - développement du logo<br></br>
                    - prototypage d'applications<br></br>
                    - conception graphique pour l'association
                </TravailRealise>
                <Outils category="detail">
                    <Figma />
                    <Illustrator />
                </Outils >
                <Perimetre category="detail">
                    Branding & UI Design
                </Perimetre >
                <Date category="detail">
                    Mars 2021
                </Date>
            </ProjectDescription>

            <ProjectImage>
                <div>
                    <ResponsiveImg src={jardin_numerique} />
                </div>
            </ProjectImage>
        </Projet>

        <Projet reverse>

            <ProjectDescription url="/">
                <APropos>
                    La création d'un logo est un élément essentiel de l'image d'une entreprise. J'ai travaillé sur l'image de marque d'entreprises dans différents domaines.
                </APropos>
                <TravailRealise>
                    - création d'un logo pour Entraide Entreprises qui est une start-up d'Etat rattachée à l'incubateur de Bercy<br></br>
                    - l'un des projets les plus difficiles est la création d'un logo pour une marque personnelle<br></br>
                    - logo pour un restaurant à Paris<br></br>
                    - image de marque pour une application prédictive<br></br>
                    - logo pour l'association DanseDense pour illlustrer le mouvement<br></br>
                    - création d'un logo pour l'équipe BercyHub au sein des Ministères Economiques et Financiers
                </TravailRealise>
                <Outils category="detail">
                    <Figma />
                    <Illustrator />
                </Outils >
                <Perimetre category="detail">
                    Branding
                </Perimetre >
                <Date category="detail">
                    2021 - 2022
                </Date>
            </ProjectDescription>

            <ProjectImage>
                <div>
                    <ResponsiveImg src={projet_tomorrow} />
                </div>
            </ProjectImage>

        </Projet>

    </ThemeProvider>
}