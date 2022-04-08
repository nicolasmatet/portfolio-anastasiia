import { Link, Stack, SvgIcon } from '@mui/material';
import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import { ReactComponent as BehanceImg } from '../../public/portfolio_elements/social_icons/behance.svg';

export function BehanceIcon() {
    return <SvgIcon fontSize='inherit' component={BehanceImg} viewBox="0 0 576 512" ></SvgIcon>
}


export function SocialLinks(props: any) {
    const { style, others } = props;
    return <Stack direction="row" spacing={2} style={style} {...props}>
        <Link href="anastasiia.sokhina@gmail.com">
            <MailOutlineRoundedIcon fontSize='inherit' />
        </Link>

        <Link href="https://www.instagram.com/nastieth/">
            <InstagramIcon fontSize='inherit' />
        </Link>

        <Link href="https://www.linkedin.com/in/anastasiia-sokhina-00a36917b/">
            <LinkedInIcon fontSize='inherit' />
        </Link>

        <Link href="https://500px.com/p/adresvnikuda?view=photos">
            <PhotoCameraOutlinedIcon fontSize='inherit' />
        </Link>
        <Link href="https://www.behance.net/anastasiiasokhina">
            <BehanceIcon />
        </Link>
    </Stack >;
}
