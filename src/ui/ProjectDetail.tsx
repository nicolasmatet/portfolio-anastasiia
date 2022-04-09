import { Button, Link, Stack, styled, Typography, useTheme } from '@mui/material';
import { spacing } from '@mui/system';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';


export function APropos(props: any) {
    const { children } = props
    return <Stack direction="column">
        <Typography variant="h4">A PROPOS DU PROJET</Typography>
        <br></br>
        <Typography variant="body1">{children}</Typography>
    </Stack>
}

export function TravailRealise(props: any) {
    const { children } = props
    return <Stack direction="column">
        <Typography variant="h5">Travail réalisé</Typography>
        <Typography variant="body1">{children}</Typography>
    </Stack>
}

function ProjectDetail(props: any) {
    const { title, children } = props
    return <Stack direction="column" style={{ flexGrow: 1 }}>
        <Typography variant="h6">{title}</Typography>
        <Stack sx={{ paddingY: { xs: 1, sm: 1, md: 2 } }}>{children}</Stack>
    </Stack>
}

const DetailContainer = styled(Stack)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.up('md')]: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        "& *": { marginBottom: theme.spacing(2) }
    },
    justifyContent: 'start',
    alignItems: "start",
}));

const ToolContainer = styled(Stack)(({ theme }) => ({
    "& img": { height: "4ch", maxHeight: "4ch", width: 'unset' },
}));

export function Outils(props: any) {
    const { children, other } = props
    return <ProjectDetail title="outils"  {...other}>
        <ToolContainer direction="row" spacing={1}>
            {React.Children.map(children, (c: any, idx: number) => <div style={{ height: '4ch' }} key={idx}>{c}</div>)}
        </ToolContainer>
    </ProjectDetail >
}

export function Perimetre(props: any) {
    return <ProjectDetail title="périmètre de travail" {...props} />
}

export function Date(props: any) {
    return <ProjectDetail title="date" {...props} />
}


const ProjectDescriptionWrapper = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(8)
    },
    [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(6),
        marginBottom: theme.spacing(4)
    },
    [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(4)
    }
}));

export const ProjectVideoWrapper = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        maxWidth: 280,
        maxHeight: 157,
        width: 280,
        height: 157
    },
    [theme.breakpoints.up('sm')]: {
        maxWidth: 560,
        maxHeight: 315,
        width: 560,
        height: 315
    },
    [theme.breakpoints.only('lg')]: {
        maxWidth: 400,
        maxHeight: 225,
        width: 400,
        height: 225
    },
    [theme.breakpoints.up('lg')]: {
        maxWidth: 784,
        maxHeight: 441,
        width: 896,
        height: 504
    }
}));

const ProjectImageWrapper = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(8)
    },
    [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(6)
    },
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1)
    }
}));

export function ProjectVideo(props: any) {
    const theme = useTheme();
    const { children } = props;
    return <Stack sx={{ alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.background.paper }}>
        <ProjectVideoWrapper>{children}</ProjectVideoWrapper>
    </Stack >
}
export function ProjectImage(props: any) {
    const theme = useTheme();
    const { children } = props;
    return <Stack sx={{ alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.background.paper }}>
        <ProjectImageWrapper>{children}</ProjectImageWrapper>
    </Stack >
}



export function ProjectDescription(props: any) {
    const { url, children } = props
    const seeMoreLinkRef = React.useRef<any>(null)
    const details = children.filter((c: any) => c.props.category === "detail")
    const others = children.filter((c: any) => c.props.category != "detail")

    const seeMore = <>
        <Link href={url} style={{ display: 'none' }} ref={seeMoreLinkRef}></Link>
        <Button variant='contained'
            sx={{ paddingX: 4, width: { xs: '100%', sm: '100%', md: '40%' } }}
            onClick={() => seeMoreLinkRef?.current?.click()}>
            Voir plus
        </Button>
    </>

    return <Stack>
        <ProjectDescriptionWrapper spacing={4}>
            {others}
            <DetailContainer>
                {details}
                <Stack style={{ flexGrow: 1 }} />
            </DetailContainer>
            {url && seeMore}
        </ProjectDescriptionWrapper>
    </Stack>
}

export const Projet = styled(Stack, {
    shouldForwardProp: (prop) => prop !== "reverse",
})<{ reverse?: boolean }>
    (({ theme, reverse }) => ({
        display: 'flex',
        [theme.breakpoints.up('lg')]: {
            flexDirection: reverse ? "row-reverse" : "row",
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: "column-reverse",
        },
        ">*": { flex: 1 }
    }));