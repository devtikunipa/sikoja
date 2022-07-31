import React, { useEffect, useState } from 'react'
import NavBar from '../guestLayouts/Navbar'
import Container from '@mui/material/Container';
import Carousel from './Carousel';
import ListSikoja from './ListSikoja';
import Footer from '../guestLayouts/Footer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import APIGETALL from '../../services/axios/GetAll';
import LoadingSkeleton from './LoadingSkeleton';



const Sikojas = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        APIGETALL.Sikojas().then(result => {
            setData(result.data);
            setIsLoading(false);
            console.log(result.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);


    return (
        <>
            <NavBar />
            <main>
                {isLoading ? (
                    <LoadingSkeleton />
                ) : (
                    <>
                        <Container maxWidth='lg'>
                            <Carousel lastUpdate={data} />
                            <ListSikoja data={data} />
                            <Box sx={{ mx: 'auto', mt: 5, textAlign: 'center' }}>
                                <Button variant='outlined'>Load more...</Button>
                            </Box>
                        </Container>
                        <Container maxWidth='xl' sx={{ mt: 4, pt: 4, pb: 2, backgroundColor: 'primary.light' }}>
                            <Footer />
                        </Container>
                    </>
                )
                }
            </main>
        </>
    )
}

export default Sikojas