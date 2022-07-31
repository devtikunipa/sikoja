import React from 'react';
import Typograph from '../../components/Typograph';
import Container from '@mui/material/Container';


const Footer = props => {
    return (
        <Container maxWidth='xl' {...props} sx={{ backgroundColor: 'primary.light', }}>
            {/* <Typograph text='Copyright &copy; 2022 SIKOJA, All rights reserved.' variant="body2" align='center' textTransform='capitalize' sx={{ pb: 1 }} /> */}
            <Typograph text='Copyright &copy; 2022 by IT CENTER UNIPA' variant="body2" align='center' textTransform='capitalize' sx={{ pb: 1 }} />
        </Container>
    )
}

export default Footer