// MapComponent.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MAP_API } from '../../Utils/config';

const MapComponent = ({ lat, long }) => {
    useEffect(() => {
        const map = L.map('map').setView([lat, long], 13); 

        L.tileLayer(MAP_API, {
            maxZoom: 19,
        }).addTo(map);

        L.marker([lat, long]).addTo(map)
            .bindPopup('Marker at given location!')
            .openPopup();

        return () => {
            map.remove();
        };
    }, [lat, long]);

    return <div id="map" style={{ height: '500px', width: '100%' }}></div>; 
};

export default MapComponent;
