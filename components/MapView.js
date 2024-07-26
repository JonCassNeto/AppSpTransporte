import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { getBusPositions } from '../services/OlhoVivoAPI';

const BusMap = () => {
    const [busPositions, setBusPositions] = useState([]);

    useEffect(() => {
        const fetchBusPositions = async () => {
            const positions = await getBusPositions();
            setBusPositions(positions);
        };

        fetchBusPositions();
    }, []);

    return (
        <MapView style={{ flex: 1 }}>
            {busPositions.map((bus) => (
                <Marker
                    key={bus.VehicleId}
                    coordinate={{ latitude: bus.Latitude, longitude: bus.Longitude }}
                    title={`Bus ${bus.VehicleId}`}
                    description={`Line ${bus.LineCode}`}
                />
            ))}
        </MapView>
    );
};

export default BusMap;
