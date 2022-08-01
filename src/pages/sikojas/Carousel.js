import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Moment from '../../components/Moment';
import ReactPlayer from 'react-player';
import { URLROOT } from '../../services';

const Carousel = (props) => {
  const { lastUpdate } = props;
  // const post = mainFeaturedPost
  return (
    lastUpdate.map((post, index) => {
      if (index === 0 && post.galery[0]) {
        const extension = post.galery[0].filename.split(".");
        return (
          <Grid container key={index} alignItems='center' sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }, bgcolor: 'primary.light', mt: 2, borderRadius: 2 }}>
            <Grid item lg={6}>
              {
                extension[1] === 'mp4' ? (
                  <Box>
                    <ReactPlayer height='auto' width='100%' controls url={URLROOT + post.galery[0].path} playing={true} />
                  </Box>
                ) : (
                  <Paper
                    sx={{
                      height: '350px',
                      widht: '100%',
                      backgroundColor: 'grey.300',
                      color: '#fff',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundImage: `url(${URLROOT}${post.galery[0].path})`,
                    }}
                  />
                )
              }
            </Grid>
            <Grid item lg={6}>
              <Box
                sx={{
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                  backgroundColor: 'primary.light',
                }}
              >
                <Typography component="h2" variant="h5" color="inherit" textTransform='capitalize' fontWeight={600} gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="h6" color="inherit" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="subtitel1" color="inherit" paragraph>
                  {Moment(post.created_at)}
                </Typography>
                <Link variant="subtitle1" href={'/detail/' + post.id} color='primary.main'>
                  Selengkapnya...
                </Link>
              </Box>
            </Grid>
          </Grid>
        )
      }
    })
  );

}

export default Carousel