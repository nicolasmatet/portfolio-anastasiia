import { Box, Modal, styled, useTheme } from '@mui/material';
import * as React from 'react';

export function ProgressiveImg(props: any) {
    const { style, src, others } = props
    const theme = useTheme()
    const [loaded, setLoaded] = React.useState(false)
    const [innerStyle, setInnerStyle] = React.useState({
        ...style,
        opacity: 0,
        transition: theme.transitions.create('opacity', {
            duration: theme.transitions.duration.standard,
        })
    })
    React.useEffect(() => {
        if (loaded) {
            setInnerStyle({
                ...innerStyle,
                opacity: 1,
                objectFit: 'cover'
            })
        }
    }, [loaded])
    return (

        <img
            onLoad={() => setLoaded(true)}
            style={innerStyle}
            src={src}
            {...others} />
    )
}

export const ModalWrapper = styled(Box)(({ theme }) => ({
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
export function ImgModal(props: any) {
    const { state, children } = props
    const [open, setOpen] = state
    return <Modal open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-img"
        aria-describedby="modal-modal-img"
    >
        <ResponsiveImgContext.Provider value={{ sizes: '10000px' }}>
            <ModalWrapper >
                {children}
            </ModalWrapper>
        </ResponsiveImgContext.Provider>
    </Modal>
}

export const ResponsiveImgContext = React.createContext({ sizes: '(min-width: 1024px) 40vw, 100vw' });

export function ResponsiveImg(props: any) {
    const { style, src, others } = props
    const theme = useTheme()
    const [loaded, setLoaded] = React.useState(false)
    const [innerStyle, setInnerStyle] = React.useState({
        ...style,
        opacity: 0,
        transition: theme.transitions.create('opacity', {
            duration: theme.transitions.duration.standard,
        }),
    })
    React.useEffect(() => {
        if (loaded) {
            setInnerStyle({
                ...innerStyle,
                opacity: 1,
                objectFit: 'cover'
            })
        }
    }, [loaded])

    return (
        <ResponsiveImgContext.Consumer>
            {({ sizes }) => (
                <img
                    src={src.src}
                    srcSet={src.srcSet}
                    width={src.width}
                    height={src.height}
                    onLoad={() => setLoaded(true)}
                    style={innerStyle}
                    sizes={sizes}
                    {...others}
                />
            )}

        </ResponsiveImgContext.Consumer>
    )
}