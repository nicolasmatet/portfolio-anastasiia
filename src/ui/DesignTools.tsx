import * as React from 'react';
import afterEffect from "../../public/portfolio_elements/design_tools/logo_after_effects.png"
import camtasia from "../../public/portfolio_elements/design_tools/logo_camtasia.png"
import figma from "../../public/portfolio_elements/design_tools/logo_figma.png"
import illustrator from "../../public/portfolio_elements/design_tools/logo_illustrator.png"
import inDesign from "../../public/portfolio_elements/design_tools/logo_indesign.png"
import photoshop from "../../public/portfolio_elements/design_tools/logo_photoshop.png"
import premiere from "../../public/portfolio_elements/design_tools/logo_premiere_pro.png"
import spline from "../../public/portfolio_elements/design_tools/logo_spline.jpeg"
import wordpress from "../../public/portfolio_elements/design_tools/logo_wordpress.png"


function DesignTool(props: { src: any }) {
    const { src } = props;
    return <img srcSet={src.srcSet} src={src.src} sizes="50px"></img>
}

export function AfterEffect() {
    return <DesignTool src={afterEffect} />
}

export function Camtasia() {
    return <DesignTool src={camtasia} />
}

export function Figma() {
    return <DesignTool src={figma} />
}


export function Illustrator() {
    return <DesignTool src={illustrator} />
}

export function InDesign() {
    return <DesignTool src={inDesign} />
}


export function Photoshop() {
    return <DesignTool src={photoshop} />
}

export function Premiere() {
    return <DesignTool src={premiere} />
}

export function Spline() {
    return <DesignTool src={spline} />
}

export function Wordpress() {
    return <DesignTool src={wordpress} />
}