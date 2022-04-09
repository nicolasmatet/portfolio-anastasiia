import { Box, Button, Fade, IconButton, Modal, Slide, Stack, styled, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { ResponsiveImgContext } from './Image';
import { useSwipeable } from 'react-swipeable';

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
    margin: "auto",
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

const ModalWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    boxShadow: '24px',
    maxHeight: '100%',
    overflowY: 'auto',
    backgroundColor: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
        width: '100%'
    },
    [theme.breakpoints.only('lg')]: {
        maxWidth: theme.breakpoints.values.lg,
    },
    [theme.breakpoints.only('xl')]: {
        maxWidth: theme.breakpoints.values.xl,
    },
}));



export function Carousel(props: any) {
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    const { style, children, others } = props;
    const baseStyle = { ...style, ...{ cursor: 'pointer' } }
    const carousel = <CarouselBase {...others} style={baseStyle} onClickSlide={handleModalOpen}>{children}</CarouselBase>
    const CarouselForModal = React.forwardRef((props: any, ref) => <CarouselBase role="modal" {...props} ref={ref}></CarouselBase>);
    CarouselForModal.displayName = "CarouselForModal";


    const modal = <Modal open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <ResponsiveImgContext.Provider value={{ sizes: '10000px' }}>
            <ModalWrapper >
                <CarouselForModal {...others} style={style} >{children}</CarouselForModal>
            </ModalWrapper>
        </ResponsiveImgContext.Provider>
    </Modal>
    return <>
        {carousel}
        {modal}
    </>
}
export function CarouselBase(props: any) {
    const { children, onClickSlide, style } = props
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
        const newIndex = (currentSlide + increment + children.length) % children.length;
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

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => toSlide(1),
        onSwipedRight: () => toSlide(-1),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return <CarouselWrapper direction="row" style={style}>
        <NavWrapper onClick={() => toSlide(-1)}>
            <ArrowBackIosNewRoundedIcon />
        </NavWrapper>
        <ContentWrapper {...swipeHandlers}>
            <Slide in={slideIn} direction={slideDirection} timeout={125} onClick={onClickSlide}>
                {children[currentSlide]}
            </Slide>
            <CarouselIndicatorWrapper>
                <CarouselIndicators slides={children} selected={currentSlide} onClick={jumpToSlide} />
            </CarouselIndicatorWrapper>
        </ContentWrapper>
        <NavWrapper onClick={() => toSlide(1)}>
            <ArrowForwardIosRoundedIcon />
        </NavWrapper>
    </CarouselWrapper>


}
