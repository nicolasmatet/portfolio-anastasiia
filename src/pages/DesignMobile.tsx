import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import { getTheme } from '../themes/Themes';
import { AfterEffect, Figma, Illustrator, Premiere } from '../ui/DesignTools';
import { Header } from '../ui/Header';
import { ProgressiveImg, ResponsiveImg } from '../ui/Image';
import { APropos, Date, Outils, Perimetre, ProjectDescription, ProjectImage, Projet, TravailRealise } from '../ui/ProjectDetail';
import projet_tomorrow from "../../public/portfolio_elements/page2_mobile/projet tomorrow.png"
import projet_thefood from "../../public/portfolio_elements/page2_mobile/projet thefood.png"
import lettres from "../../public/portfolio_elements/page2_mobile/DESIGN MOBILE lettres.png"

export function DesignMobile() {
    const theme = getTheme('mobile')
    return <ThemeProvider theme={theme}>
        <Header>
            <ResponsiveImg src={lettres} />
        </Header>

        <Projet>
            <ProjectDescription url="/">
                <APropos>
                    Ce travail a été réalisé dans le cadre d'une formation en web design.  J'ai procédé à une refonte du projet proposé.<br></br>
                    <br></br>
                    Mon domaine de responsabilité était de travailler sur un service web mobile. Ce service compte les calories de la nourriture que vous commandez et vous permet de laisser un e-tip.<br></br>
                </APropos>
                <TravailRealise>
                    - analyse du marché et du public cible<br></br>
                    - création de versions adaptatives à l'aide de auto layer et de composants<br></br>
                    - test d’usabilité avec un prototype créé dans Figma
                </TravailRealise>
                <Outils category="detail">
                    <Figma />
                    <Premiere />
                    <AfterEffect />
                </Outils >
                <Perimetre category="detail">
                    UX/UI Design
                </Perimetre >
                <Date category="detail">
                    Mars - Fev. 2022
                </Date>
            </ProjectDescription>

            <ProjectImage>
                <div>
                    <ResponsiveImg src={projet_thefood} />
                </div>
            </ProjectImage>
        </Projet>

        <Projet reverse>


            <ProjectDescription url="/">
                <APropos>

                    Ce projet est mon idée d'application, inspirée par un horoscope.<br></br>
                    <br></br>
                    Tomorow est une application qui vous permet de connaître l'avenir en répondant à seulement 15 questions.<br></br>
                </APropos>
                <TravailRealise>
                    - réalisation d'une analyse du public et benchmark<br></br>
                    - compilation d'une base de données de questions et de prédictions<br></br>
                    - branding du projet, conception du logo<br></br>
                    - création d'un prototype cliquable<br></br>
                    - réalisation d'un test utilisateur
                </TravailRealise>
                <Outils category="detail">
                    <Figma />
                    <Illustrator />
                </Outils >
                <Perimetre category="detail">
                    UX/UI Design
                </Perimetre >
                <Date category="detail">
                    Février 2022
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