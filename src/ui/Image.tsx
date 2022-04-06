import { useTheme } from '@mui/material';
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

        <img
            onLoad={() => setLoaded(true)}
            style={innerStyle}
            src={src}
            {...others} />
    )
}

export function ResponsiveImg(props: any) {
    const { style, src, others, sizes } = props
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

    const reactiveSizes = sizes ? sizes : '(min-width: 1024px) 50vw, 100vw'
    return (

        <picture>
            <source srcSet={src.srcSet} type='image/webp' />
            <img
                src={src.src}
                srcSet={src.srcSet}
                width={src.width}
                height={src.height}
                onLoad={() => setLoaded(true)}
                style={innerStyle}
                sizes={reactiveSizes}
                {...others}
            />
        </picture>
    )
}