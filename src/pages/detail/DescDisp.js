import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const MainMedia = (props) => {

    return (
        <Box sx={{ pt: 2 }}>
            <Typography variant='h6' textTransform='capitalize' fontWeight='bold' color='primary.dark'>Tindaklanjut Laporan</Typography>
            <Typography variant='subtitle1' color='grey.600' fontStyle='italic' paragraph>1 hari lalu, Oleh Aryum Nining Erliandi</Typography>
            <Typography variant='body1' color='grey.900' >Keterangan: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, at neque, cumque amet tenetur.</Typography>
            <Typography variant='body1' color='grey.900'>Estimasi: 26 Agustus 2022</Typography>
            <ImageList
                sx={{ width: '100', height: 'auto' }}
                variant="quilted"
                cols={3}
                rowHeight={130}
                width='100%'
            >
                <ImageListItem key={2}>
                    <img
                        src={'https://source.unsplash.com/random'}
                        alt='satuuu'
                        loading="lazy"
                    />
                </ImageListItem>
            </ImageList>
        </Box>
    )
}

export default MainMedia