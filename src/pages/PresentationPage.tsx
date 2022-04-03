import { Button, Link, Stack, styled, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { getTheme } from '../themes/Themes';
import { ProgressiveImg } from '../ui/Image';

const Logo = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    cursor: 'pointer',
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
    },
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    'div:nth-of-type(1)': { maxWidth: '300px' }
}));

const SquarePrimary = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    [theme.breakpoints.up('sm')]: {
        alignItems: 'start',
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
    }
}));

const CVGrid = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',

    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
        'div:nth-of-type(2n+1)': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.secondary,
        }
    },
    [theme.breakpoints.up('sm')]: {
        'div:nth-of-type(3n+1)': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.secondary,
        }
    }
}));

const CVSquare = styled(Stack)(({ theme }) => ({
    minWidth: '32ch',
    display: 'flex',
    flex: 1,
    border: '1px solid',
    borderColor: theme.palette.text.primary,
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),

    },
    [theme.breakpoints.up('md')]: {
        height: '24ch',
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.up('sm')]: {
        minWidth: '64ch'
    },
    'h4:nth-of-type(1)': {
        marginBottom: theme.spacing(2),
    },
}));

export function SocialLinks() {
    return <Stack direction="row" style={{ margin: 'auto' }} spacing={2}>
        <Link href="">
            <ProgressiveImg src="/portfolio_elements/page_cv/logo_blanc_mail.png"></ProgressiveImg>
        </Link>
        <Link href="">
            <ProgressiveImg src="/portfolio_elements/page_cv/logo_blanc_instagram.png"></ProgressiveImg>
        </Link>
        <Link href="">
            <ProgressiveImg src="/portfolio_elements/page_cv/logo_blanc_linkedin.png"></ProgressiveImg>
        </Link>
        <Link href="">
            <ProgressiveImg src="/portfolio_elements/page_cv/logo_blanc_photo.png"></ProgressiveImg>
        </Link>
        <Link href="">
            <ProgressiveImg src="/portfolio_elements/page_cv/logo_blanc_behance.png"></ProgressiveImg>
        </Link>
    </Stack>
}
export function PresentationPage() {
    const theme = getTheme('presentation')
    const navigate = useNavigate()
    return <ThemeProvider theme={theme}>
        <Logo onClick={() => navigate('/')}>
            <ProgressiveImg src="/portfolio_elements/page_cv/logo_blanc.png"></ProgressiveImg>
        </Logo>
        <SquarePrimary
            direction={{ xs: 'column-reverse', sm: 'column', md: 'row' }}
            spacing={{ xs: 0, sm: 0, md: 12, lg: 24 }}>
            <Stack sx={{ flex: 1, maxWidth: '30ch' }}>
                <ProgressiveImg src="/portfolio_elements/page_cv/tel_et_photo.png"></ProgressiveImg>
            </Stack>
            <Stack direction="column"
                spacing={{ xs: 2, sm: 2, md: 8 }}
                sx={{
                    flex: 2,
                    flexGrow: 1,
                    maxWidth: '60ch',
                    paddingX: { xs: 2, sm: 2, md: 0 },
                    paddingY: { xs: 2, sm: 2, md: 4 },
                }}>
                <ProgressiveImg src="/portfolio_elements/page_cv/bonjour.png"></ProgressiveImg>
                <Typography variant='body1' style={{ textAlign: 'justify' }}>
                    Je suis Anastasiia.<br />
                    Après une expérience en tant que UX/UI Designer dans le domaine
                    des finances publiques, je cherche à étendre mes compétences créatives
                    et techniques en rejoignant une équipe dynamique, innovante et inspirée par son projet.
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'column', md: 'row' }}
                    spacing={{ xs: 2, sm: 2, md: 4 }}
                    sx={{ display: 'flex' }}>
                    <Button sx={{ flex: 2, whiteSpace: "nowrap", minWidth: "16ch" }} variant='contained'>CV</Button>
                    <Button sx={{ flex: 2, whiteSpace: "nowrap", minWidth: "16ch" }} variant='outlined'>VOIR PORTFOLIO</Button>
                    <Stack sx={{ flex: 3, minWidth: "16ch", maxWidth: '24ch' }}><SocialLinks /></Stack>
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