import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Moment from '../../components/Moment';
import ReactPlayer from 'react-player';
import { URLROOT } from '../../services';

const ListSikoja = (props) => {
    const { data } = props;
    return (
        <Grid container spacing={3} sx={{ mt: { xs: 1 } }} >
            {data.map((dt) => (
                <Grid item key={dt.id} xs={12} sm={6} md={4}>
                    <CardActionArea component="a" href={'/detail/' + dt.id} >
                        <Card
                            sx={{ display: 'flex', flexDirection: 'column', borderRadius: 1.5 }}
                        >
                            {
                                dt.galery.map((paths, index) => {
                                    if (index === 0) {
                                        const name = paths.filename.split(".");
                                        if (name[1] == 'mp4') {
                                            return (
                                                <ReactPlayer key={index} height='100%' width='100%' controls url={URLROOT + paths.path} playing={true} />
                                            )
                                        } else {
                                            return (
                                                <CardMedia key={index}
                                                    component="img"
                                                    sx={{ height: '250px' }}
                                                    image={URLROOT + paths.path}
                                                    alt="random"
                                                />
                                            )
                                        }
                                    }
                                })
                            }
                            <CardContent sx={{ flexGrow: 1, pb: 0 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {dt.title}
                                </Typography>
                                <Typography>
                                    {dt.description.slice(0, 80) + (dt.description.length > 90 ? '...' : '')}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {Moment(dt.created_at)}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="normal" sx={{ textTransform: 'capitalize' }}>Selengkapnya...</Button>
                            </CardActions>
                        </Card>
                    </CardActionArea>
                </Grid>
            ))
            }
        </Grid >
    )
}

export default ListSikoja