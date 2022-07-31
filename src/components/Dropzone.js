import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import CardMedia from '@mui/material/CardMedia';
import { useDropzone } from 'react-dropzone';
import Typograph from './Typograph';

const Dropzone = () => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        },
        accept: { 'image/png': ['.png', '.jpg', '.jpeg'] },

    });
    const thumbs = files.map(file => (
        <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={file.preview}
        />
    ));
    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <Paper sx={{ cursor: 'pointer', background: '#fafafa', color: '#bdbdbd', border: '1px dashed #ccc', '&:hover': { border: '1px solid #ccc' }, mt: 2 }}>
            <div style={{ padding: '20px', height: 230 }} {...getRootProps()}>
                <Input {...getInputProps()} />
                {isDragActive ? (
                    <Typograph variant='subtitle1' text='Drop disini..' color='primary.main' />
                ) : (
                    <Typograph variant='subtitle1' text='Drag & Drop atau klik untuk memilih gambar..' />
                )}
                {thumbs}
            </div>
        </Paper>
    )
}

export default Dropzone