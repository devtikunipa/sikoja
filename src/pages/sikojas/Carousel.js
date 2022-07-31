import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Moment from '../../components/Moment';

const Carousel = (props) => {
  const { lastUpdate } = props;
  // const post = mainFeaturedPost
  return (
    lastUpdate.map((post, index) => {
      if (index === 0) {
        return post ? (
          <Paper
            sx={{
              height: 400,
              position: 'relative',
              backgroundColor: 'grey.300',
              color: '#fff',
              mb: 4,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url(http://localhost:8000/${post.galery.path})`,
            }} key={index}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,.3)',
              }}
            />
            <Grid container>
              <Grid item md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                  }}
                >
                  <Typography component="h2" variant="h4" color="inherit" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="h6" color="inherit" paragraph>
                    {post.description}
                  </Typography>
                  <Typography variant="h6" color="inherit" paragraph>
                    {Moment(post.created_at)}
                  </Typography>
                  <Link variant="subtitle1" href={'/detail/' + post.id} color='primary.light'>
                    Selengkapnya...
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Paper >
        ) : (
          <Skeleton variant="rectangular" width='100' height='400px' />
        )
      }
    })
  );

}

export default Carousel