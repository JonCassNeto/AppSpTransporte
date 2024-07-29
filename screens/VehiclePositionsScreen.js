// VehiclePositionsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getVehiclePositions } from '../services/OlhoVivoAPI'; // Certifique-se de que este caminho está correto

export default function VehiclePositionsScreen() {
  const [vehicles, setVehicles] = useState([]);

  // Exemplo em VehiclePositionsScreen.js
useEffect(() => {
  const fetchPositions = async () => {
    try {
      const data = await getVehiclePositions();
      setPositions(data);
    } catch (error) {
      console.error('Erro ao buscar posições dos veículos', error);
    }
  };

  fetchPositions();

  const intervalId = setInterval(fetchPositions, 60000); // Atualiza a cada 60 segundos

  return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
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
