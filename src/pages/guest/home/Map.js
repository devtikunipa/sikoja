import mapboxgl, { Marker, Map } from 'mapbox-gl';
import Token from '../../services/mapbox';
import Container from '@mui/system/Container';
import React, { useRef, useEffect, useState } from 'react';
import Typograph from '../../components/Typograph';
import PlaceIcon from '@mui/icons-material/Place';
mapboxgl.accessToken = Token;


const Maps = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(134.0597);
    const [lat, setLat] = useState(-0.8618);
    const [zoom, setZoom] = useState(14);
    const [marker, setMarker] = useState(null);



    useEffect(() => {
        navigator.geolocation.getCurrentPosition((coord) => {
            if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [coord.coords.longitude, coord.coords.latitude],
                zoom: zoom
            });
            setMarker(new mapboxgl.Marker({
                draggable: true
            }).setLngLat([lng, lat]).addTo(map));
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));

        }, ErrorLocation, {
            enableHighAccuracy: true
        });
    });

    function onDragEnd() {
        const lngLat = marker.getLngLat();
    }

    const ErrorLocation = position => {
        console.log(position)
    }

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });

    });
    return (
        <>
            <Container sx={{ height: '500px', width: '100%' }}>
                <Map ref={mapContainer} />
            </Container>
        </>
    )
}

export default Maps