import { Button, Stack, styled, Typography } from '@mui/material';
import * as React from 'react';


export function APropos(props: any) {
    const { children } = props
    return <Stack direction="column">
        <Typography variant="h4">A PROPOS DU PROJET</Typography>
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
        {children}
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
    "& img": { height: "4ch", maxHeight: "4ch" }
}));

export function Outils(props: any) {
    const { children, other } = props
    return <ProjectDetail title="outils"  {...other}>
        <ToolContainer direction="row" spacing={1}>
            {React.Children.map(children, (c: any, idx: number) => <div key={idx}>{c}</div>)}
        </ToolContainer>
    </ProjectDetail>
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

export function ProjectImage(props: any) {
    const { children } = props;
    return <Stack><ProjectImageWrapper>{children}</ProjectImageWrapper></Stack >
}

const ProjectImageWrapper = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
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

export function ProjectDescription(props: any) {
    const { url, children } = props
    const details = children.filter((c: any) => c.props.category === "detail")
    const others = children.filter((c: any) => c.props.category != "detail")

    const seeMore = url ? <Button variant='contained' style={{ width: '32ch', flexGrow: 0 }}>Voir plus</Button> : <></>
    return <Stack>
        <ProjectDescriptionWrapper spacing={4}>
            {others}
            <DetailContainer>
                {details}
                <Stack style={{ flexGrow: 1 }} />
            </DetailContainer>
            {seeMore}
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