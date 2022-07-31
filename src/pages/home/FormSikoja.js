import React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typograph from '../../components/Typograph';
import Dropzone from '../../components/Dropzone';
import Maps from './Map';

const currencies = [
    {
        index: 1,
        street: 'Jl satu',
    },
    {
        index: 2,
        street: 'Jalan dua',
    },
    {
        index: 3,
        street: 'jalan tiga',
    },
    {
        index: 4,
        street: 'Jalan empat',
    },
];

const categories = [
    {
        index: 1,
        category: "Kerusakan Parah"
    },
    {
        index: 2,
        category: "Kerusakan Sedang"
    },
    {
        index: 3,
        category: "Kerusakan Biasa"
    }
];

const FormSikoja = () => {
    const [street, setStreet] = useState(0);
    const [category, setCategories] = useState(1);

    const handleSelected = (event) => {
        setCategories(event.target.value);
    };

    return (
        <Container maxWidth="lg" sx={{ mx: "auto", mt: 6 }}>
            <Grid container>
                <Grid item align='center' lg={8} xs={12} sm={12} md={10} sx={{ mx: 'auto' }}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column', px: 3 }}
                    >
                        <form onSubmit={() => { }}>
                            <CardContent>
                                <Typograph text="SIKOJA" gutterBottom variant="h5" textTransform='uppercase' fontWeight='bold' sx={{ py: 2 }} />
                                <FormControl fullWidth >
                                    <TextField required id="title" label="Judul Laporan Anda" variant="outlined" />
                                    <TextField required id="title" multiline rows={4} label="Isi Laporan Anda" variant="outlined" sx={{ mt: 2 }} />
                                    <Autocomplete disablePortal
                                        id="combo-box-demo"
                                        options={currencies}
                                        sx={{ mt: 2 }}
                                        getOptionLabel={(currencies) => `${currencies.street}`}
                                        noOptionsText='Nama Kampung Tidak Ditemukan'
                                        renderInput={(params) => <TextField {...params} label="Nama Kampung" />}
                                        onChange={(_, street) => setStreet(street.index)}
                                    />
                                    <Autocomplete disablePortal
                                        id="combo-box-demo"
                                        options={currencies}
                                        sx={{ mt: 2 }}
                                        getOptionLabel={(currencies) => `${currencies.street}`}
                                        noOptionsText='Nama Jalan Tidak Ditemukan'
                                        renderInput={(params) => <TextField {...params} label="Nama Jalan" />}
                                        onChange={(_, street) => setStreet(street.index)}
                                    />
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="Kategori Laporan"
                                        value={category}
                                        onChange={handleSelected}
                                        sx={{ mt: 2, textAlign: 'left' }}
                                    >
                                        {categories.map((option) => (
                                            <MenuItem key={option.index} value={option.index} >
                                                {option.category}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <Grid container sx={{ mt: 1 }} spacing={2}>
                                        <Grid item lg={7} md={12} xs={12}>
                                            <TextField fullWidth required id="title" label="Nama Anda" variant="outlined" />
                                        </Grid>
                                        <Grid item lg={5} md={12} xs={12}>
                                            <TextField fullWidth required id="title" label="Nomor Hp Anda" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                    {/* <TextField fullWidth required id="title" type="file" placeholder='Upload foto' variant="outlined" sx={{ mt: 2 }} /> */}
                                    <Dropzone />
                                    {/* <Maps /> */}
                                </FormControl>
                            </CardContent>
                            <CardActionArea sx={{ px: 2, pb: 4, pt: 1 }}>
                                <Button fullWidth type='submit' variant='contained' onClick={() => { }}>Lapor</Button>
                            </CardActionArea>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FormSikoja