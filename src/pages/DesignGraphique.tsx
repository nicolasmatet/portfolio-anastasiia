import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import lettres from "../../public/portfolio_elements/page3_graphique/design_graphique_letters.png";
import p1_i1 from "../../public/portfolio_elements/page3_graphique/projet1_bh_1.png";
import p1_i2 from "../../public/portfolio_elements/page3_graphique/projet1_bh_2.png";
import p1_i3 from "../../public/portfolio_elements/page3_graphique/projet1_bh_3.png";
import p1_i4 from "../../public/portfolio_elements/page3_graphique/projet1_bh_4.png";
import p2_i1 from "../../public/portfolio_elements/page3_graphique/projet2 budget 1.png";
import p2_i2 from "../../public/portfolio_elements/page3_graphique/projet2 budget 2.png";
import p2_i3 from "../../public/portfolio_elements/page3_graphique/projet2 budget 3.png";
import p2_i4 from "../../public/portfolio_elements/page3_graphique/projet2 budget 4.png";
import p3_i1 from "../../public/portfolio_elements/page3_graphique/projet3 ie 1.png";
import p3_i2 from "../../public/portfolio_elements/page3_graphique/projet3 ie 2.png";
import p3_i3 from "../../public/portfolio_elements/page3_graphique/projet3 ie 3.png";
import p4_i1 from "../../public/portfolio_elements/page3_graphique/projet4 dd 1.png";
import p4_i2 from "../../public/portfolio_elements/page3_graphique/projet4 dd 2.png";
import p5_i1 from "../../public/portfolio_elements/page3_graphique/projet5 illu 1.png";
import p5_i2 from "../../public/portfolio_elements/page3_graphique/projet5 illu 2.png";
import p5_i3 from "../../public/portfolio_elements/page3_graphique/projet5 illu 3.png";
import p5_i4 from "../../public/portfolio_elements/page3_graphique/projet5 illu 4.png";
import p6_i1 from "../../public/portfolio_elements/page3_graphique/projet6 3d 1.png";
import p6_i2 from "../../public/portfolio_elements/page3_graphique/projet6 3d 2.png";
import p7_i1 from "../../public/portfolio_elements/page3_graphique/projet7 site 1.png";
import p7_i2 from "../../public/portfolio_elements/page3_graphique/projet7 site 2.png";
import { getTheme } from '../themes/Themes';
import { Carousel } from '../ui/Carousel';
import { Figma, Illustrator, InDesign, Spline } from '../ui/DesignTools';
import { Header } from '../ui/Header';
import { ResponsiveImg } from '../ui/Image';
import { APropos, Date, Outils, Perimetre, ProjectDescription, Projet, TravailRealise } from '../ui/ProjectDetail';









export function DesignGraphique() {
    const theme = getTheme('graphique')
    return <ThemeProvider theme={theme}>
        <Header>
            <ResponsiveImg src={lettres} />
        </Header>

        <Projet>
            <ProjectDescription>
                <APropos>
                    Ce projet a ??t?? cr???? pour pr??senter les start-ups de l'??tat, qui ont ??t?? accompagn??es par une ??quipe de BercyHub en 2020.<br></br>
                    <br></br>
                    BERCY HUB charg??e de pr??figurer un incubateur num??rique minist??riel ?? c??t?? de sa mission d'administration minist??rielle des donn??es.

                </APropos>
                <TravailRealise>
                    - s??lection et cr??ation d'illustrations, d'ic??nes, d'identit?? d'entreprise<br></br>
                    - recueil d'informations sur toutes les start-ups de l'??tat<br></br>
                    - proposition de trois styles de conception de page diff??rents<br></br>
                    - corrections de la conception en fonction des commentaires du client<br></br>
                    - r??alisation de la mise en page dans InDesign
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
                    <ResponsiveImg src={p1_i1} />
                </div>
                <div>
                    <ResponsiveImg src={p1_i2} />
                </div>
                <div>
                    <ResponsiveImg src={p1_i3} />
                </div>
                <div>
                    <ResponsiveImg src={p1_i4} />
                </div>

            </Carousel>

        </Projet>


        <Projet reverse>
            <ProjectDescription>
                <APropos>
                    Ce projet a ??t?? mis en ??uvre pour la Direction du Budget du Minist??re des Finances. L'objectif ??tait d'illustrer les principales missions du d??partement.<br></br>
                    <br></br>
                    Pour pr??senter au public les 8 missions de la Direction du Budget, j'ai propos?? de cr??er une bande dessin??e pour chacune de ces missions.<br></br>
                </APropos>
                <TravailRealise>
                    - r??daction d'un sc??nario pour chaque mission<br></br>
                    - recherche de style et benchmark<br></br>
                    - ??laboration des personnages et des illustrations<br></br>
                    - dessin selon les normes graphiques existantes
                </TravailRealise>
                <Outils category="detail">
                    <Illustrator />
                </Outils >
                <Perimetre category="detail">
                    Illustration
                </Perimetre >
                <Date category="detail">
                    Ao??t 2021
                </Date>
            </ProjectDescription>

            <Carousel >
                <div>
                    <ResponsiveImg src={p2_i1} />
                </div>
                <div>
                    <ResponsiveImg src={p2_i2} />
                </div>
                <div>
                    <ResponsiveImg src={p2_i3} />
                </div>
                <div>
                    <ResponsiveImg src={p2_i4} />
                </div>

            </Carousel>

        </Projet>


        <Projet>
            <ProjectDescription>
                <APropos>
                    L'objectif de ce travail ??tait de cr??er un guide d'utilisation pour la start-up de l'??tat Intelligence Entreprise (IE) afin de montrer aux utilisateurs comment s'en servir.<br></br>
                    <br></br>
                    IE est un moteur de recherche qui permet de requ??ter les informations contenues dans les bases documentaires de la direction.<br></br>

                </APropos>
                <TravailRealise>
                    - recueil d'informations sur le projet<br></br>
                    - s??lection et cr??ation d'illustrations, d'ic??nes<br></br>
                    - mises en page correspondant au design du projet de start-up<br></br>
                    - r??alisation du design dans InDesign<br></br>
                    - cr??ation d'une navigation cliquable dans un fichier pdf
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
                    <ResponsiveImg src={p3_i1} />
                </div>
                <div>
                    <ResponsiveImg src={p3_i2} />
                </div>
                <div>
                    <ResponsiveImg src={p3_i3} />
                </div>
            </Carousel>
        </Projet>


        <Projet reverse>
            <ProjectDescription>
                <APropos>
                    Ce travail a ??t?? r??alis?? pendant mon stage au sein de l'association Danse Dense qui est une plateforme de rep??rage, de visibilit?? et d'accompagnement des chor??graphes ??mergent??e??s.<br></br>
                    <br></br>
                    L'objectif ??tait de cr??er des feuilles de salle pour pr??senter au public le spectacle de la soir??e et le programme du festival.<br></br>
                </APropos>
                <TravailRealise>
                    - s??lection des photos<br></br>
                    - cr??ation d'un style et d'une palette de couleurs<br></br>
                    - mises en page correspondant au design du projet<br></br>
                    - r??alisation du design dans InDesign
                </TravailRealise>
                <Outils category="detail">
                    <Illustrator />
                    <InDesign />
                </Outils >
                <Perimetre category="detail">
                    ??r??ation print
                </Perimetre >
                <Date category="detail">
                    Mars 2020
                </Date>
            </ProjectDescription>

            <Carousel >
                <div>
                    <ResponsiveImg src={p4_i1} />
                </div>
                <div>
                    <ResponsiveImg src={p4_i2} />
                </div>
            </Carousel>
        </Projet>

        <Projet>
            <ProjectDescription>
                <APropos>
                    Ces illustrations ont ??t?? r??alis??es pendant le temps libre durant l'??pid??mie de Covid.  <br></br>
                    <br></br>
                    Pendant le premier confinement, j'ai suivi un cours d'illustration pour am??liorer mes comp??tences en design graphique. <br></br>
                </APropos>
                <TravailRealise>
                    - concevoir une id??e pour une illustration <br></br>
                    - s??lection de r??f??rence pour l'inspiration <br></br>
                    - cr??ation d'une croquis <br></br>
                    - s??lection d'un style et d'une palette de couleurs <br></br>
                    - r??alisation d'une illustration dans Adobe Illustrator
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
                    <ResponsiveImg src={p5_i1} />
                </div>
                <div>
                    <ResponsiveImg src={p5_i2} />
                </div>
                <div>
                    <ResponsiveImg src={p5_i3} />
                </div>
                <div>
                    <ResponsiveImg src={p5_i4} />
                </div>
            </Carousel>
        </Projet>

        <Projet reverse>
            <ProjectDescription>
                <APropos>
                    Pour compl??ter mes comp??tences en mati??re d'illustration, j'ai d??cid?? de tester un ??diteur d'illustrations 3D. <br></br>
                    <br></br>
                    Spline est un ??diteur assez simple pour la mod??lisation vectorielle 3D et  cr??er une animation qui peut ??tre int??gr??e dans un site web (exemple sur la page d'accueil)
                </APropos>
                <TravailRealise>
                    - concevoir une id??e pour une illustration
                    - s??lection d'un style et d'une palette de couleurs
                    - r??alisation d'une illustration dans Spline 3D
                    - cr??ation d'animations dans le programme
                    - cr??ation de mockup
                    - int??gration d'une illustration sur le site web
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
                    F??v. 2022
                </Date>
            </ProjectDescription>

            <Carousel >
                <div>
                    <ResponsiveImg src={p6_i1} />
                </div>
                <div>
                    <ResponsiveImg src={p6_i2} />
                </div>
            </Carousel>
        </Projet>


        <Projet>
            <ProjectDescription>
                <APropos>
                    Cette maquette a ??t?? r??alis??es pendant le temps libre durant l'??pid??mie de Covid. <br></br>
                    <br></br>
                    Pendant le premier confinement, j'ai suivi un cours d'illustration pour am??liorer mes comp??tences en design graphique.
                </APropos>
                <TravailRealise>
                    - concevoir une id??e pour une illustration<br></br>
                    - s??lection de r??f??rence pour l'inspiration<br></br>
                    - cr??ation d'illustrations et d'ic??nes<br></br>
                    - s??lection d'un style et d'une palette de couleurs<br></br>
                    - r??alisation d'une illustration dans Adobe Illustrator
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
                    <ResponsiveImg src={p7_i1} />
                </div>
                <div>
                    <ResponsiveImg src={p7_i2} />
                </div>
            </Carousel>
        </Projet>
    </ThemeProvider>
}