import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DriveFileMove from '@mui/icons-material/DriveFileMove';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Moment from '../../components/Moment';

const TimeLine = (props) => {
    const { dataSikoja, dataDisp } = props;
    console.log(dataSikoja);
    console.log(dataDisp);
    return (
        <Timeline position="alternate" sx={{ bgcolor: 'primary.light', borderRadius: 2, py: 2 }}>
            <Typography variant='h5' fontWeight='bold'>Status Laporan</Typography>
            <Divider sx={{ my: 1 }} />
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    <Typography>{Moment(dataSikoja[0].created_at)}</Typography>
                    <Typography variant='subtitile1'>Oleh: {dataSikoja[0].name}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='error'>
                        <AssignmentIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: dataDisp[0] ? 'warning.main' : '' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography component="span" color='primary.main' fontWeight='bold'>
                        Laporan Diterima
                    </Typography>
                    <Typography variant='subtitile1' paragraph align='left'>
                        {dataSikoja[0].title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0', mt: 2 }}
                    variant="body2"
                    color="text.secondary"
                >
                    <Typography>{dataDisp[0] ? Moment(dataDisp[0].created_at) : 'Belum ada aktivitas'}</Typography>
                    <Typography variant='subtitile1'>Oleh Admin SIKOJA</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={dataDisp[0] ? 'warning' : ''}>
                        <DriveFileMove />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: dataDisp.description ? 'success.main' : '' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography component="span" color={dataDisp[0] ? 'primary' : ''} fontWeight='bold'>
                        Laporan Didisposisikan
                    </Typography>
                    <Typography variant='subtitile2' paragraph align='right' textTransform='camelcase'>
                        { dataDisp[0] ? `Laporan anda akan ditindak lanjuti oleh ${dataDisp[0].instance.instance}` : 'admin belum mendisposisikan laporan ini'}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0', mt: 2 }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    <Typography>1 hari lalu</Typography>
                    <Typography variant='subtitile1'>Oleh: Dinas PU Provinsi</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="success" >
                        <PendingActionsIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'blue.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography component="span" color='primary' fontWeight='bold'>
                        Laporan DItindaklanjuti
                    </Typography>
                    <Typography variant='subtitile1' paragraph align='left'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, at neque, cumque amet tenetur.
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0', mt: 2 }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    1 hari lalu
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='blue'>
                        <CheckCircleOutlineIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2, pt: 2 }}>
                    <Typography component="span" color='primary' fontWeight='bold'>
                        Selesai
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default TimeLine