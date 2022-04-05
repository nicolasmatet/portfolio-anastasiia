import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import { getTheme } from '../themes/Themes';
import { Figma, Illustrator, InDesign, Spline } from '../ui/DesignTools';
import { Header } from '../ui/Header';
import { ProgressiveImg } from '../ui/Image';
import { APropos, Date, Outils, Perimetre, ProjectDescription, Projet, TravailRealise } from '../ui/ProjectDetail';
import { Carousel } from '../ui/Carousel';

export function DesignGraphique() {
    const theme = getTheme('graphique')
    return <ThemeProvider theme={theme}>
        <Header>

            <ProgressiveImg src="/portfolio_elements/page3_graphique/design_graphique_letters.png"></ProgressiveImg>
        </Header>



        <Projet>
            <ProjectDescription>
                <APropos>
                    Ce projet a été créé pour présenter les start-ups de l'État, qui ont été accompagnées par une équipe de BercyHub en 2020.<br></br>
                    <br></br>
                    BERCY HUB chargée de préfigurer un incubateur numérique ministériel à côté de sa mission d'administration ministérielle des données.

                </APropos>
                <TravailRealise>
                    - sélection et création d'illustrations, d'icônes, d'identité d'entreprise<br></br>
                    - recueil d'informations sur toutes les start-ups de l'État<br></br>
                    - proposition de trois styles de conception de page différents<br></br>
                    - corrections de la conception en fonction des commentaires du client<br></br>
                    - réalisation de la mise en page dans InDesign
                </TravailRealise>
                <Outils category="detail">
                    <Illustrator />
                    <InDesign />
                </Outils >
                <Perimetre category="detail">
                    Illustration, Mise en page
                </Perimetre >
                <Date category="detail">
                    Jan. - Fev. 2021
                </Date>
            </ProjectDescription>

            <Carousel >
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet1_bh_1.png" />
                </div>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet1_bh_2.png" />
                </div>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet1_bh_3.png" />
                </div>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet1_bh_4.png" />
                </div>

            </Carousel>

        </Projet>


        <Projet reverse>
            <ProjectDescription>
                <APropos>
                    Ce projet a été mis en œuvre pour la Direction du Budget du Ministère des Finances. L'objectif était d'illustrer les principales missions du département.<br></br>
                    <br></br>
                    Pour présenter au public les 8 missions de la Direction du Budget, j'ai proposé de créer une bande dessinée pour chacune de ces missions.<br></br>
                </APropos>
                <TravailRealise>
                    - rédaction d'un scénario pour chaque mission<br></br>
                    - recherche de style et benchmark<br></br>
                    - élaboration des personnages et des illustrations<br></br>
                    - dessin selon les normes graphiques existantes
                </TravailRealise>
                <Outils category="detail">
                    <Illustrator />
                </Outils >
                <Perimetre category="detail">
                    Illustration
                </Perimetre >
                <Date category="detail">
                    Août 2021
                </Date>
            </ProjectDescription>

            <Carousel >
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet2 budget 1.png" />
                </div>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet2 budget 2.png" />
                </div>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet2 budget 3.png" />
                </div>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet2 budget 4.png" />
                </div>

            </Carousel>

        </Projet>


        <Projet>
            <ProjectDescription>
                <APropos>
                    L'objectif de ce travail était de créer un guide d'utilisation pour la start-up de l'État Intelligence Entreprise (IE) afin de montrer aux utilisateurs comment s'en servir.<br></br>
                    <br></br>
                    IE est un moteur de recherche qui permet de requêter les informations contenues dans les bases documentaires de la direction.<br></br>

                </APropos>
                <TravailRealise>
                    - recueil d'informations sur le projet<br></br>
                    - sélection et création d'illustrations, d'icônes<br></br>
                    - mises en page correspondant au design du projet de start-up<br></br>
                    - réalisation du design dans InDesign<br></br>
                    - création d'une navigation cliquable dans un fichier pdf
                </TravailRealise>
                <Outils category="detail">
                    <Illustrator />
                    <InDesign />
                </Outils >
                <Perimetre category="detail">
                    Illustration, Mise en page
                </Perimetre >
                <Date category="detail">
                    Mars - Avril 2021
                </Date>
            </ProjectDescription>

            <Carousel >
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet3 ie 1.png" />
                </div>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet3 ie 2.png" />
                </div>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet3 ie 3.png" />
                </div>
            </Carousel>
        </Projet>


        <Projet reverse>
            <ProjectDescription>
                <APropos>
                    Ce travail a été réalisé pendant mon stage au sein de l'association Danse Dense qui est une plateforme de repérage, de visibilité et d'accompagnement des chorégraphes émergent·e·s.<br></br>
                    <br></br>
                    L'objectif était de créer des feuilles de salle pour présenter au public le spectacle de la soirée et le programme du festival.<br></br>
                </APropos>
                <TravailRealise>
                    - sélection des photos<br></br>
                    - création d'un style et d'une palette de couleurs<br></br>
                    - mises en page correspondant au design du projet<br></br>
                    - réalisation du design dans InDesign
                </TravailRealise>
                <Outils category="detail">
                    <Illustrator />
                    <InDesign />
                </Outils >
                <Perimetre category="detail">
                    Сréation print
                </Perimetre >
                <Date category="detail">
                    Mars 2020
                </Date>
            </ProjectDescription>

            <Carousel >
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet4 dd 1.png" />
                </div>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet4 dd 2.png" />
                </div>
            </Carousel>
        </Projet>

        <Projet>
            <ProjectDescription>
                <APropos>
                    Ces illustrations ont été réalisées pendant le temps libre durant l'épidémie de Covid.  <br></br>
                    <br></br>
                    Pendant le premier confinement, j'ai suivi un cours d'illustration pour améliorer mes compétences en design graphique. <br></br>
                </APropos>
                <TravailRealise>
                    - concevoir une idée pour une illustration <br></br>
                    - sélection de référence pour l'inspiration <br></br>
                    - création d'une croquis <br></br>
                    - sélection d'un style et d'une palette de couleurs <br></br>
                    - réalisation d'une illustration dans Adobe Illustrator
                </TravailRealise>
                <Outils category="detail">
                    <Illustrator />
                </Outils >
                <Perimetre category="detail">
                    Illustration
                </Perimetre >
                <Date category="detail">
                    Avril - Mai 2020
                </Date>
            </ProjectDescription>

            <Carousel >
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet5 illu 1.png" />
                </div>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet5 illu 2.png" />
                </div>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet5 illu 3.png" />
                </div>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet5 illu 4.png" />
                </div>
            </Carousel>
        </Projet>

        <Projet reverse>
            <ProjectDescription>
                <APropos>
                    Pour compléter mes compétences en matière d'illustration, j'ai décidé de tester un éditeur d'illustrations 3D. <br></br>
                    <br></br>
                    Spline est un éditeur assez simple pour la modélisation vectorielle 3D et  créer une animation qui peut être intégrée dans un site web (exemple sur la page d'accueil)
                </APropos>
                <TravailRealise>
                    - concevoir une idée pour une illustration
                    - sélection d'un style et d'une palette de couleurs
                    - réalisation d'une illustration dans Spline 3D
                    - création d'animations dans le programme
                    - création de mockup
                    - intégration d'une illustration sur le site web
                </TravailRealise>
                <Outils category="detail">
                    <Illustrator />
                    <Figma />
                    <Spline />
                </Outils >
                <Perimetre category="detail">
                    Illustration
                </Perimetre >
                <Date category="detail">
                    Fév. 2022
                </Date>
            </ProjectDescription>

            <Carousel >
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet6 3d 1.png" />
                </div>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet6 3d 2.png" />
                </div>
            </Carousel>
        </Projet>


        <Projet>
            <ProjectDescription>
                <APropos>
                    Cette maquette a été réalisées pendant le temps libre durant l'épidémie de Covid. <br></br>
                    <br></br>
                    Pendant le premier confinement, j'ai suivi un cours d'illustration pour améliorer mes compétences en design graphique.
                </APropos>
                <TravailRealise>
                    - concevoir une idée pour une illustration<br></br>
                    - sélection de référence pour l'inspiration<br></br>
                    - création d'illustrations et d'icônes<br></br>
                    - sélection d'un style et d'une palette de couleurs<br></br>
                    - réalisation d'une illustration dans Adobe Illustrator
                </TravailRealise>
                <Outils category="detail">
                    <Illustrator />
                </Outils >
                <Perimetre category="detail">
                    Illustration
                </Perimetre >
                <Date category="detail">
                    Mai 2020
                </Date>
            </ProjectDescription>

            <Carousel >
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet7 site 1.png" />
                </div>
                <div>
                    <ProgressiveImg src="/portfolio_elements/page3_graphique/projet7 site 2.png" />
                </div>
            </Carousel>
        </Projet>
    </ThemeProvider>
}