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

