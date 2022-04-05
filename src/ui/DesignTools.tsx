import * as React from 'react';

function DesignTool(props: { src: string }) {
    const { src } = props;
    return <img src={src}></img>
}

export function AfterEffect() {
    return <DesignTool src="portfolio_elements/design_tools/logo_after_effects.png" />
}

export function Camtasia() {
    return <DesignTool src="portfolio_elements/design_tools/logo_camtasia.png" />
}

export function Figma() {
    return <DesignTool src="portfolio_elements/design_tools/logo_figma.png" />
}


export function Illustrator() {
    return <DesignTool src="portfolio_elements/design_tools/logo_illustrator.png" />
}

export function InDesign() {
    return <DesignTool src="portfolio_elements/design_tools/logo_indesign.png" />
}


export function Photoshop() {
    return <DesignTool src="portfolio_elements/design_tools/logo_photoshop.png" />
}

export function Premiere() {
    return <DesignTool src="portfolio_elements/design_tools/logo_premiere_pro.png" />
}

export function Spline() {
    return <DesignTool src="portfolio_elements/design_tools/logo_spline.jpeg" />
}

export function Wordpress() {
    return <DesignTool src="portfolio_elements/design_tools/logo_wordpress.png" />
}