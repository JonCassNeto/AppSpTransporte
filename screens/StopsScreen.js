import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getStops } from '../services/OlhoVivoAPI'; 

export default function StopsScreen() {
  const [stops, setStops] = useState([]);

  useEffect(() => {
    const fetchStops = async () => {
      try {
        const data = await getStops();
        setStops(data);
      } catch (error) {
        console.error('Erro ao buscar paradas:', error);
      }
    };

    fetchStops();
  }, []);

  return (
    <MapView style={styles.map}>
      {stops.map((stop) => (
        <Marker
          key={stop.id}
          coordinate={{
            latitude: stop.latitude,
            longitude: stop.longitude,
          }}
          title={`Parada ${stop.id}`}
          description={stop.name}
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
