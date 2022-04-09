import { Box, Modal, Stack, styled } from "@mui/material"
import * as React from 'react';
import { ResponsiveImgContext } from "./Image";

export const Row = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        maxWidth: "50vw",
    },
    "& *": { flex: 1 }
}))

export const PhotoList = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(4),
    alignItems: 'center',
    maxWidth: '100%'
}))


const ModalWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    boxShadow: '24px',
    maxHeight: '100%',
    overflowY: 'auto',
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

export function PhotoWithModal(props: any) {
    const { children, style, others } = props;
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    const newStyle = { ...style, ... { cursor: 'pointer' } }


    const modal = <Modal open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <ResponsiveImgContext.Provider value={{ sizes: '10000px' }}>
            <ModalWrapper >
                {children}
            </ModalWrapper>
        </ResponsiveImgContext.Provider>
    </Modal>
    return <>
        <div {...others} style={newStyle} onClick={handleModalOpen}>
            {children}
        </div>
        {modal}
    </>
}
