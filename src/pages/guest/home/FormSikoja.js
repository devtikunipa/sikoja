import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typograph from '../../../components/Typograph';
import APIGETALL from '../../../services/axios/GetAll';
import Alert from '@mui/material/Alert';
import APISTORE from '../../../services/axios/Store';
import { useDropzone } from 'react-dropzone';
import ReactPlayer from 'react-player';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import APIUPLOAD from '../../../services/axios/Upload';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const FormSikoja = () => {
    const initialDataState = {
        title: '',
        description: '',
        village_id: null,
        street_id: null,
        name: '',
        hp: null,

    }

    const [data, setData] = useState(initialDataState);
    const [streets, setStreets] = useState([]);
    const [villages, setVillages] = useState([]);
    const [message, setMessage] = useState({ msg: 'Belum ada aktivitas', status: false, code: 201 });
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        },
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
            'video/mp4': ['.mp4']
        },
        maxFiles: 4,
        maxSize: 10240000,
        minSize: 1,
        noClick: true,
        useFsAccessApi: true,
    });

    const thumbs = files.map(file => {
        if (file.type === 'video/mp4') {
            return (
                <ReactPlayer key={file.name} height='100%' width='100%' controls url={file.preview} />
            )
        } else {
            return (
                <ImageListItem key={file.name} cols={1} rows={1}>
                    <img
                        src={file.preview}
                        alt={file.name}
                        loading="lazy"
                    />
                </ImageListItem>
            )
        }
    });


    useEffect(() => {
        APIGETALL.Streets().then(result => {
            const dataStreets = result.data.sort((a, b) => (a.street > b.street) ? 1 : ((b.street > a.street) ? -1 : 0))
            setStreets(dataStreets)
        });
        APIGETALL.Villages().then(result => {
            const dataVillages = result.data.sort((a, b) => (a.village > b.village) ? 1 : ((b.village > a.village) ? -1 : 0))
            setVillages(dataVillages)
        });
    }, []);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
        setMessage({ status: false });
    };
    const handleOnSelectedVillage = (event, newValue) => {
        const id = newValue.id;
        setData({ ...data, village_id: id })
    }
    const handleOnSelectedStreet = (event, newValue) => {
        const id = newValue.id;
        setData({ ...data, street_id: id })
    }
    const handleChecked = (event) => {
        setChecked(event.target.checked);
        if (event.target.checked === true) {
            setData({ ...data, street_id: null })
        }
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (files.length === 0) {
            setMessage({ code: 400, msg: 'Upload gambar/video sebagai bukti pengaduan', status: true })
        } else {
            setOpen(true)
            APISTORE.StoreSikoja(data).then(result => {
                // console.log(result.data);
                setMessage({ code: 201, msg: "Laporan telah disampaikan", status: true });
                for (let file of files) {
                    const data2 = new FormData();
                    data2.append('galery', file)
                    data2.append('sikoja_id', result.data.id)
                    APIUPLOAD.UploadGalery(data2).then(() => {
                        setData({
                            title: '',
                            description: '',
                            village_id: null,
                            street_id: null,
                            name: '',
                            hp: null,
                        });
                        setFiles([]);
                    }).catch(error => {
                        setOpen(false)
                        setMessage({ code: 400, msg: 'Gagal mengupload, coba lagi!', status: true })
                    })
                }
                setOpen(false)
            }).catch(error => {
                setMessage({ code: 400, msg: 'Gagal mengupload, coba lagi!', status: true })
                setOpen(false)
            });
        }
    }
    const handleChangeFile = (e) => {
        const acceptedFiles = Object.values(e.target.files);
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }

    return (
        <Container maxWidth="lg" sx={{ mx: "auto", mt: 6 }}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Grid container>
                <Grid item align='center' lg={8} xs={12} sm={12} md={10} sx={{ mx: 'auto' }}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column', px: 3 }}
                    >
                        <form onSubmit={handleOnSubmit}>
                            <CardContent>
                                <Typograph text="SIKOJA" gutterBottom variant="h5" textTransform='uppercase' fontWeight='bold' sx={{ py: 2 }} />
                                <Alert severity={message.code === 201 ? 'success' : 'error'} sx={{ mb: 2, display: `${message.status ? 'flex' : 'none'}` }} >{message.msg}</Alert>
                                <FormControl fullWidth >
                                    <TextField required id="title" name='title' label="Judul Laporan Anda" variant="outlined" value={data.title} onChange={handleOnChange} />
                                    <TextField required id="description" name='description' multiline rows={4} label="Isi Laporan Anda" variant="outlined" value={data.description} onChange={handleOnChange} sx={{ mt: 2 }} />
                                    <Autocomplete
                                        id="village_id"
                                        name='village_id'
                                        options={villages}
                                        sx={{ mt: 2 }}
                                        getOptionLabel={(villages) => `${villages.village}`}
                                        noOptionsText='Nama Kampung Tidak Ditemukan'
                                        renderInput={(params) => <TextField {...params} required label="Nama Kampung" />}
                                        onChange={handleOnSelectedVillage}
                                    />
                                    <Autocomplete
                                        disabled={checked}
                                        id="street_id"
                                        name='street_id'
                                        options={streets}
                                        sx={{ mt: 2 }}
                                        getOptionLabel={(streets) => `${streets.street}`}
                                        noOptionsText='Nama Jalan Tidak Ditemukan'
                                        renderInput={(params) => <TextField {...params} required label="Nama Jalan" />}
                                        onChange={handleOnSelectedStreet}
                                    />
                                    <FormControlLabel control={<Checkbox checked={checked}
                                        onChange={handleChecked} />} label="Belum ada nama jalan" />
                                    <Grid container sx={{ mt: 1 }} spacing={2}>
                                        <Grid item lg={7} md={12} xs={12}>
                                            <TextField fullWidth required id="name" name='name' label="Nama Anda" value={data.name} variant="outlined" onChange={handleOnChange} />
                                        </Grid>
                                        <Grid item lg={5} md={12} xs={12}>
                                            <TextField fullWidth required id="hp" name='hp' type='number' label="Nomor Hp Anda (08...)" variant="outlined" value={!data.hp ? '' : data.hp} onChange={handleOnChange} />
                                        </Grid>
                                    </Grid>
                                    <Paper sx={{ cursor: 'pointer', background: '#fafafa', color: '#bdbdbd', border: '1px dashed #ccc', '&:hover': { border: '1px solid #ccc' }, mt: 2, pt: 2 }}>
                                        <Button
                                            variant="text"
                                            component="label"
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                multiple
                                                onChange={handleChangeFile}
                                            />
                                        </Button>
                                        <div style={{ padding: '20px', height: 'auto' }} {...getRootProps()}>
                                            {/* <Input {...getInputProps()} /> */}
                                            {isDragActive ? (
                                                <Typograph variant='subtitle1' text='Drop disini..' color='primary.main' />
                                            ) : (
                                                <Typograph variant='subtitle1' text='Drag & Drop atau klik untuk memilih gambar..' />
                                            )}
                                        </div>
                                    </Paper>
                                    {files.length != 0 ? (
                                        <Container >
                                            <ImageList
                                                sx={{ width: '100', height: 'auto' }}
                                                variant="quilted"
                                                cols={4}
                                                rowHeight={121}
                                            >
                                                {thumbs}
                                            </ImageList>
                                        </Container>
                                    ) : null}
                                </FormControl>
                            </CardContent>
                            <CardActions sx={{ px: 2, pb: 4, pt: 1 }}>
                                <Button fullWidth size='large' type='submit' variant='contained' sx={{ fontSize: 18 }}>Lapor</Button>
                            </CardActions>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FormSikoja