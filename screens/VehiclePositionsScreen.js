import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getVehiclePositions } from '../services/OlhoVivoAPI'; 

export default function VehiclePositionsScreen() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const data = await getVehiclePositions();
        setVehicles(data); 
      } catch (error) {
        console.error('Erro ao buscar posições dos veículos', error);
      }
    };

    fetchPositions();

    const intervalId = setInterval(fetchPositions, 60000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <MapView style={styles.map}>
      {vehicles.map((vehicle) => (
        <Marker
          key={vehicle.id}
          coordinate={{
            latitude: vehicle.latitude,
            longitude: vehicle.longitude,
          }}
          title={`Veículo ${vehicle.prefixo}`}
          description={`Linha ${vehicle.linha}`}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
