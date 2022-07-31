import React from 'react';
import Typography from '@mui/material/Typography';

const Typograph = props => {
    const { text, variant = 'body1', align = 'center', textTransform = 'capitalize', fontWeight = 'medium' } = props;
    return (
        <Typography variant={variant} align={align} textTransform={textTransform} fontWeight={fontWeight} {...props}>
            {text}
        </Typography>
    )
}

export default Typograph;
