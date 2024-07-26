import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

export default function App() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        // Substitua 'URL_DA_API_OLHO_VIVO' pela URL correta da API Olho Vivo
        const response = await axios.get('https://aiko-olhovivo-proxy.aikodigital.io/posicoes');
        setVehicles(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados dos veículos:', error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {vehicles.map(vehicle => (
          <Marker
            key={vehicle.id}
            coordinate={{ latitude: vehicle.latitude, longitude: vehicle.longitude }}
            title={`Veículo ${vehicle.id}`}
          />
        ))}
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
