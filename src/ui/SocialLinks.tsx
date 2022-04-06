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
        <Link href="">
            <MailOutlineRoundedIcon fontSize='inherit' />
        </Link>

        <Link href="">
            <InstagramIcon fontSize='inherit' />
        </Link>

        <Link href="">
            <LinkedInIcon fontSize='inherit' />
        </Link>

        <Link href="">
            <PhotoCameraOutlinedIcon fontSize='inherit' />
        </Link>
        <Link href="">
            <BehanceIcon />
        </Link>
    </Stack >;
}
