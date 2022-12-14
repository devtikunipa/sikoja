import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Footer from '../Footer';
import Typograph from '../../../components/Typograph';
import Sikoja from '../../../assets/images/Sikoja.jpg';

const About = () => {
    return (
        <>
            <Container maxWidth='lg'>
                <Typograph text='SIKOJA' variant='h4' component='h3' textTransform='uppercase' fontWeight='bold' sx={{ mt: 4, mb: 1 }} />
                <Typograph text='(Sistem Informasi Pengaduan Kondisi Kerusakan Jalan)' variant='h6' sx={{ mb: 4 }} />
                <Box
                    sx={{
                        backgroundImage: `url(${Sikoja})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'primary.light',
                        width: 400,
                        height: 300,
                        mx: 'auto',
                        mb: 3
                    }}
                />
                <Typograph variant='body1' paragraph align='justify' text='SIKOJA merupakan metode pelayanan Pananganan Kondisi Kerusakan Jalan berbasis Aplikasi dapat membantu masyarakat merespon penanganan dan mengambil langkah efektif sesuai dengan kewenangan penanganannya. Diharapkan aplikasi tersebut dapat meningkatkan kepercayaan dan kinerja pemerintah kepada masyarakat khususnya pada bidang jalan.' textTransform='none' />
            </Container>
            <Container maxWidth='100' sx={{ mt: 4, pt: 4, pb: 2, backgroundColor: 'primary.light' }}>
                <Footer />
            </Container>
        </>
    )
}

export default About