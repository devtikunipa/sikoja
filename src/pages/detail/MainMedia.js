import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Moment from '../../components/Moment';

const MainMedia = (props) => {
    return (
        props.sikoja.map((dt) => (
            <Container maxWidth='lg' key={dt.id}>
                <Paper
                    sx={{
                        position: 'relative',
                        backgroundColor: 'grey.300',
                        color: '#fff',
                        mb: 4,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundImage: `url(http://localhost:8000/${dt.galery.path})`,
                        height: '450px',
                        border: '1px solid #ccc',
                        borderRadius: '20px',
                        mt: 2
                    }}
                />
                <Grid container spacing={2}>
                    <Grid item lg={6} md={5} sm={12}>
                        <Card>
                            <CardContent>
                                <Typography variant='h5' > {dt.title}</Typography>
                                <Typography variant='subtitle2' paragraph> {dt.name}, {Moment(dt.created_at)}</Typography>
                                <Typography variant='body' paragraph> {dt.description}</Typography>
                                <Typography variant='body2'>Lokasi: {dt.street.street}</Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'left', p: 2 }}>
                                <Chip label={dt.status.statuse} color="primary" variant="outlined" sx={{ p: 2 }} />
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={6} md={7} sm={12}>
                        <Card>
                            <CardContent>
                                <Typography variant='h5' >Respon laporan</Typography>
                                <Paper
                                    sx={{
                                        my: 2,
                                        position: 'relative',
                                        backgroundColor: 'grey.300',
                                        color: '#fff',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundImage: `url(http://localhost:8000/${dt.galery.path})`,
                                        height: '200px',
                                        border: '1px solid #ccc',
                                        borderRadius: '10px',
                                    }}
                                />
                                <Typography variant='body' paragraph>{dt.description}</Typography>
                                <Typography variant='subtitle2'>Oleh: {dt.name}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        ))
    )
}

export default MainMedia