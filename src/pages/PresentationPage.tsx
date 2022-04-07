import { Button, Stack, styled, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { getTheme } from '../themes/Themes';
import { CVGrid, CVSquare, SquarePrimary } from '../ui/Cv';
import { HeaderContainer, Logo } from '../ui/Header';
import { ProgressiveImg, ResponsiveImg } from '../ui/Image';
import { SocialLinks } from '../ui/SocialLinks';

import logo from "../../public/portfolio_elements/page_cv/logo_blanc.png"
import bonjour from "../../public/portfolio_elements/page_cv/bonjour.png"
import tel from "../../public/portfolio_elements/page_cv/tel_et_photo.png"


const SocialLinksWrapper = styled(SocialLinks)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(1),
        fontSize: '24px',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '32px',
    },
    alignItems: "center"
}));

export function PresentationPage() {
    const theme = getTheme('presentation')
    const navigate = useNavigate()
    return <ThemeProvider theme={theme}>
        <HeaderContainer>
            <Logo onClick={() => navigate('/')}>
                <ResponsiveImg src={logo}></ResponsiveImg>
            </Logo>
        </HeaderContainer>
        <SquarePrimary
            direction={{ xs: 'column-reverse', sm: 'column', md: 'row' }}
            spacing={{ xs: 0, sm: 0, md: 12, lg: 24 }}>
            <Stack sx={{ flex: 1, maxWidth: '30ch' }}>
                <ResponsiveImg src={tel}></ResponsiveImg>
            </Stack>
            <Stack direction="column"
                spacing={{ xs: 4, sm: 4, md: 8 }}
                sx={{
                    flex: 2,
                    flexGrow: 1,
                    maxWidth: '60ch',
                    paddingX: { xs: 2, sm: 2, md: 0 },
                    paddingY: { xs: 2, sm: 2, md: 4 },
                }}>
                <ResponsiveImg src={bonjour}></ResponsiveImg>

                <Typography variant='body1' style={{ textAlign: 'justify' }}>
                    Je suis Anastasiia.<br />
                    Après une expérience en tant que UX/UI Designer dans le domaine
                    des finances publiques, je cherche à étendre mes compétences créatives
                    et techniques en rejoignant une équipe dynamique, innovante et inspirée par son projet.
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }}
                    spacing={{ xs: 2, sm: 2, md: 4 }}
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button sx={{ flex: 2, whiteSpace: "nowrap", minWidth: "16ch" }} variant='contained'>CV</Button>
                    <Button sx={{ flex: 2, whiteSpace: "nowrap", minWidth: "16ch" }} variant='outlined' onClick={() => navigate('/portfolio')}>VOIR PORTFOLIO</Button>
                    <SocialLinksWrapper />
                </Stack>
            </Stack>
        </SquarePrimary>
        <CVGrid>
            <CVSquare>
                <Typography variant='h4'>
                    HARD SKILLS
                </Typography>
                <Typography variant='body1'>
                    Photoshop, Illustrator, After Effects, Premiere Pro<br></br>
                    Figma, Miro, Sendinblue<br></br>
                    CSS/HTML, Wordpress<br></br>
                    Spline 3D, Camtasia Vidéo
                </Typography>
            </CVSquare>
            <CVSquare>
                <Typography variant='h4'>
                    SOFT SKILLS
                </Typography>
                <Typography variant='body1'>
                    Déterminée<br></br>
                    Autonome<br></br>
                    Positive<br></br>
                    Travail en équipe<br></br>
                    Ouverte d'esprit
                </Typography>
            </CVSquare>
            <CVSquare>
                <Typography variant='h4'>
                    CE DONT JE SUIS FIÈRE
                </Typography>
                <Typography variant='body1'>
                    - Candidat au Master of Sport en acrobatie à l'âge de 9 ans<br></br>
                    - J'ai dansé dans le ballet au théâtre Mariinsky de Saint-Pétersbourg à l'âge de 13 ans<br></br>
                    - J'ai déménagé seule en France quand j'avais 24 ans<br></br>
                    - La presse a beaucoup parlé de moi (même en France)<br></br>
                    - J'ai joué un rôle de figurant dans la série télévisée Émilie in Paris<br></br>
                    - J'ai dansé dans un spectacle au Carreau du temple (janvier 2022)<br></br>
                    - J'ai 3 750 followers sur Instagram<br></br>
                    - J'ai fini le GTA
                </Typography>
            </CVSquare>
            <CVSquare>
                <Typography variant='h4'>
                    HOBBYS
                </Typography>
                <Typography variant='body1'>
                    Crochet<br></br>
                    Broderie<br></br>
                    Photo<br></br>
                    Yoga<br></br>
                    Boxe<br></br>
                    Modern Jazz<br></br>
                    Dessiner l'architecture<br></br>
                    Voyage
                </Typography>
            </CVSquare>

        </CVGrid>
    </ThemeProvider >

}