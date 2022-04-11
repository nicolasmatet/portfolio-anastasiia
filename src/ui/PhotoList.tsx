import { Stack, styled } from "@mui/material"
import * as React from 'react';
import { ImgModal } from "./Image";

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


export function PhotoWithModal(props: any) {
    const { children, style, others } = props;
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const newStyle = { ...style, ... { cursor: 'pointer' } }
    const modal = <ImgModal state={[modalOpen, setModalOpen]} >
        {children}
    </ImgModal>
    return <>
        <div {...others} style={newStyle} onClick={handleModalOpen}>
            {children}
        </div>
        {modal}
    </>
}
