import { Box, Button, Fade, IconButton, Modal, Slide, Stack, styled, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const CarouselWrapper = styled(Stack)(({ theme }) => ({
    overflow: 'hidden',
    userSelect: 'none',
    display: 'flex',
    flexDirection: "row",
    margin: "auto",
    [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(4),
    },
    [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(8)
    },
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.background.default

}));



const ContentWrapper = styled(Stack)(({ theme }) => ({
    margin: "auto"
}));

const NavWrapper = styled(Button)(({ theme }) => ({
    height: "100%",
    margin: "auto",
    flexGrow: 0,
    flexBasis: "60px",
    color: theme.palette.background.default
}));



const CarouselIndicator = styled(Stack)(({ theme }) => ({
    cursor: "pointer",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
        fontSize: "24pt"
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: "48pt"
    },
}));


const CarouselIndicatorWrapper = styled(Stack)(({ theme }) => ({
    color: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: "32pt"
}));

function CarouselIndicators(props: any) {
    const theme = useTheme()
    const { slides, selected, onClick } = props
    return <>
        <Stack style={{ flexGrow: 10 }}></Stack>
        {
            slides.map((_: any, idx: number) => selected === idx ?
                <CarouselIndicator key={idx} onClick={() => onClick(idx)} style={{ color: "#FFFFFF", }}>
                    <HorizontalRuleRoundedIcon fontSize="inherit" />
                </CarouselIndicator>
                : <CarouselIndicator key={idx} onClick={() => onClick(idx)} style={{ color: theme.palette.secondary.main, }}>
                    <HorizontalRuleRoundedIcon fontSize="inherit" />
                </CarouselIndicator>)
        }
        <Stack style={{ flexGrow: 10 }}></Stack>

    </>
}

export function Carousel(props: any) {
    const { children, onClickSlide } = props

    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    const carousel = <CarouselBase slides={children} onClickSlide={handleModalOpen}></CarouselBase>
    const CarouselForModal = React.forwardRef((props: any, ref) => <CarouselBase role="modal" {...props} ref={ref}></CarouselBase>);
    CarouselForModal.displayName = "CarouselForModal";

    const modal = <Modal open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" >
        <CarouselForModal slides={children} />
    </Modal>
    return <>
        {carousel}
        {modal}
    </>
}
export function CarouselBase(props: any) {
    const { slides, onClickSlide } = props
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [slideIn, setSlideIn] = React.useState(true);
    const [slideDirection, setSlideDirection] = React.useState<"up" | "down" | "right" | "left" | undefined>('down');

    const jumpToSlide = (newIndex: number) => {
        if (newIndex === currentSlide) {
            return
        }
        const direction = newIndex > currentSlide ? 'right' : 'left';
        animateSlides(direction, newIndex)
    }

    const toSlide = (increment: number) => {
        const direction = increment > 0 ? 'right' : 'left';
        const newIndex = (currentSlide + increment + slides.length) % slides.length;
        animateSlides(direction, newIndex)
    }

    const animateSlides = (direction: "left" | "right", newIndex: number) => {
        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);
        setTimeout(() => {
            setCurrentSlide(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 250);
    }
    return <CarouselWrapper direction="row">
        <NavWrapper onClick={() => toSlide(-1)}>
            <ArrowBackIosNewRoundedIcon />
        </NavWrapper>
        <ContentWrapper>
            <Slide in={slideIn} direction={slideDirection} timeout={125} onClick={onClickSlide}>
                {slides[currentSlide]}
            </Slide>
            <CarouselIndicatorWrapper>
                <CarouselIndicators slides={slides} selected={currentSlide} onClick={jumpToSlide} />
            </CarouselIndicatorWrapper>
        </ContentWrapper>
        <NavWrapper onClick={() => toSlide(1)}>
            <ArrowForwardIosRoundedIcon />
        </NavWrapper>
    </CarouselWrapper>


}