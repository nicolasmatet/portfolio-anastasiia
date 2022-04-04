import { Link, Stack } from '@mui/material';
import * as React from 'react';
import { ProgressiveImg } from '../ui/Image';


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
    </Stack>;
}
