import { Stack, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { getTheme } from '../themes/Themes';
import { CVGrid, CVSquare } from '../ui/Cv';
import { Figma, Illustrator, Wordpress } from '../ui/DesignTools';
import { Header } from '../ui/Header';
import { ProgressiveImg } from '../ui/Image';
import { APropos, Date, Outils, Perimetre, ProjectDescription, ProjectImage, Projet, TravailRealise } from '../ui/ProjectDetail';

export function DesignWeb(props: any) {
    const theme = getTheme('web')
    return <ThemeProvider theme={theme}>
        <Header>
            <ProgressiveImg src="/portfolio_elements/page1_web/design_web_letters.png"></ProgressiveImg>
        </Header>

        <Projet>
            <ProjectDescription url="/">
                <APropos>
                    Ce projet a été réalisé dans le cadre du travail de fin d'études pour le Master Cultures et Métiers du Web.<br></br>
                    Le but de ce projet est de créer une nouvelle interface du site en cohérence avec les valeurs actuelles de l'assosiation Danse Dense.
                </APropos>
                <TravailRealise>
                    - définition d'un profil type de l'utilisateur ;<br></br>
                    - recherche utilisateur, construction personaes, des user flow, mapping d'expérience, tests d'usabilité ;<br></br>
                    - création le wireframe et le prototypage sur Figma ;<br></br>
                    - mise en œuvre du projet dans Wordpress ;<br></br>
                    - preparation d'un tutoriel pour administrer le contenu du site via le backoffice.
                </TravailRealise>
                <Outils category="detail">
                    <Figma />
                    <Illustrator />
                    <Wordpress />
                </Outils >
                <Perimetre category="detail">
                    UX/UI Design
                </Perimetre >
                <Date category="detail">
                    Jan - Avril 2022
                </Date>
            </ProjectDescription>

            <ProjectImage>
                <ProgressiveImg src="/portfolio_elements/page1_web/projet_danse_dense.png" />
            </ProjectImage>
        </Projet>

        <Projet reverse>


            <ProjectDescription url="/">
                <APropos>
                    Ce projet a été réalisé dans le cadre d’accompagnement des startups ministérielles sur un volet Design UX/UI de la plateforme impact.gouv.fr.<br></br>
                    <br></br>
                    Son objectif était d'améliorer la carte de visualisation des données et d'adapter la conception aux besoins des utilisateurs.<br></br>
                </APropos>
                <TravailRealise>
                    - design UX rénové pour l’affichage et la navigation des catégories d’entreprise dans les cartes ( tranches ou activités)<br></br>
                    - design UI compliant avec l’identité graphique de la plateforme<br></br>
                    - création d’un prototype dans Figma et des éléments graphiques<br></br>
                    - préparation d’une fiche technique pour le développement<br></br>
                </TravailRealise>
                <Outils category="detail">
                    <Figma />
                    <Illustrator />
                </Outils >
                <Perimetre category="detail">
                    UX/UI Design
                </Perimetre >
                <Date category="detail">
                    Mars 2022
                </Date>
            </ProjectDescription>

            <ProjectImage>
                <ProgressiveImg src="/portfolio_elements/page1_web/projet_impact.png" />
            </ProjectImage>

        </Projet>

    </ThemeProvider>
}