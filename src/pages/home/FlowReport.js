import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReplyIcon from '@mui/icons-material/Reply';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import Typograph from '../../components/Typograph';

const FlowReport = () => {
    return (
        <Container maxWidth="lg">
            <Typograph text='Bagaimana Laporan Saya Diproses?' variant="h4" align='center' textTransform='capitalize' fontWeight='bold' sx={{ pb: 5 }} />
            <Grid container rowGap={5} alignContent='center' justifyContent="center" sx={{ mt: 4 }} >
                <Grid item lg={3} md={8} xs={12}>
                    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                        <CardHeader
                            align='center'
                            title={<Avatar sx={{ bgcolor: 'primary.dark', width: 56, height: 56 }}>
                                <AssignmentIcon />
                            </Avatar>}
                            sx={{ mt: -4, position: 'absolute' }}
                        />
                        <CardContent sx={{ mt: 5 }}>
                            <Typograph text='Ajukan Laporan' variant='h6' fontWeight={600} />
                            <Typograph text='Anda dapat melaporan kerusakan jalan melalui form diatas' variant='subtitle1' />
                        </CardContent>
                    </Card>
                </Grid>
                <Divider orientation="vertical" flexItem sx={{ rotate: 90, display: { lg: 'flex', md: 'none', xs: 'none' } }}>
                    <ReplyIcon sx={{ transform: 'scale(-1, 1)', }} />
                </Divider>
                <Grid item lg={5} md={6} xs={12}>
                    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                        <CardHeader
                            align='center'
                            title={<Avatar sx={{ bgcolor: 'warning.main', width: 56, height: 56 }}>
                                <SendAndArchiveIcon />
                            </Avatar>}
                            sx={{ mt: -4, position: 'absolute' }}
                        />
                        <CardContent sx={{ mt: 5 }}>
                            <Typograph text='Disposisi Laporan' variant='h6' fontWeight={600} />
                            <Typograph text='Laporan anda akan didisposisikan oleh admin kepada instansi yang berwenang' variant='subtitle1'/>
                        </CardContent>
                    </Card>
                </Grid>
                <Divider orientation="vertical" flexItem sx={{ rotate: 90, display: { lg: 'flex', md: 'flex', xs: 'none' } }}>
                    <ReplyIcon sx={{ transform: 'scale(-1, 1)', }} />
                </Divider>
                <Grid item lg={3} md={5} xs={12}>
                    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                        <CardHeader
                            align='center'
                            title={<Avatar sx={{ bgcolor: 'success.main', width: 56, height: 56 }}>
                                <PublishedWithChangesIcon />
                            </Avatar>}
                            sx={{ mt: -4, position: 'absolute' }}
                        />
                        <CardContent sx={{ mt: 5 }}>
                            <Typograph text='Laporan Direspon' variant='h6' fontWeight={600} />
                            <Typograph text='Instansi yang berwenang akan merespon laporan anda' variant='subtitle1' />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FlowReport