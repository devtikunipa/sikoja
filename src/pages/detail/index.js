import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Typograph from '../../components/Typograph';
import NavBar from '../guestLayouts/Navbar';
import Container from '@mui/system/Container';
import MainMedia from './MainMedia';
import Footer from '../guestLayouts/Footer';
import APIGETONE from '../../services/axios/GetOne';
import { Grid, Skeleton } from '@mui/material';

const Detail = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        APIGETONE.SikojaOne(params.id).then(result => {
            setData(result.data);
            console.log(result.data);
            setIsLoading(false);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <NavBar />
            <main>
                {isLoading ? (
                    <Container maxWidth='lg' sx={{ mt: 2, p: 0, }}>
                        <Skeleton variant='reagtangle' width='100' height='350px' />
                        <Grid container sx={{ mt: 1 }} spacing={2}>
                            <Grid item lg={6} sm={12}>
                                <Skeleton variant='reagtangle' width='100' height='200px' />
                                <Skeleton />
                                <Skeleton width='80%' />
                                <Skeleton width='60%' />
                            </Grid>
                            <Grid item lg={6} sm={12}>
                                <Skeleton variant='reagtangle' width='100' height='200px' />
                                <Skeleton />
                                <Skeleton width='80%' />
                                <Skeleton width='60%' />
                            </Grid>
                        </Grid>
                    </Container>
                ) : (
                    <MainMedia sikoja={data} />
                )
                }
                <Container maxWidth='xl' sx={{ mt: 4, pt: 4, pb: 2, backgroundColor: 'primary.light' }}>
                    <Footer />
                </Container>
            </main>
        </>
    )
}

export default Detail