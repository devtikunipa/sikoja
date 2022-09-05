import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Moment from '../../../components/Moment';
import ReactPlayer from 'react-player';
import { URLROOT } from '../../../services';

const DescSikoja = (props) => {
    const { dataSikoja } = props;
    return (
        <Box>
            <Typography variant='h6' textTransform='capitalize' fontWeight='bold' color='primary.dark'> {dataSikoja[0].title}</Typography>
            <Typography variant='subtitle1' color='grey.600' fontStyle='italic' paragraph textTransform='capitalize'>{Moment(dataSikoja[0].created_at)}, Oleh {dataSikoja[0].name}</Typography>
            <Typography variant='body1' color='grey.900' >Keterangan: {dataSikoja[0].description}</Typography>
            <Typography variant='body1' color='grey.900'>Lokasi: {dataSikoja[0].village ? dataSikoja[0].village.village + ',' : ''}{dataSikoja[0].street ? dataSikoja[0].street.street : ''} </Typography>
            <ImageList
                sx={{ width: '100', height: 'auto' }}
                variant="quilted"
                cols={3}
                rowHeight={130}
                width='100%'
            >
                {
                    dataSikoja[0].galery.map((galery) => {
                        const extension = galery.filename.split('.')
                        if (extension[extension.length - 1] === 'mp4' || extension[extension.length - 1] === 'mov') {
                            return (
                                <ReactPlayer key={galery.id} height='auto' width='100%' controls url={URLROOT + galery.path} playing={true} />

                            )
                        } else {
                            return (
                                <ImageListItem key={galery.id}>
                                    <img
                                        src={URLROOT + galery.path}
                                        alt='satuuu'
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            )
                        }
                    })
                }
            </ImageList>
        </Box >
    )
}

export default DescSikoja