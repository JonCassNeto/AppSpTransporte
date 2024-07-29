// screens/InfoScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getVehiclePositions, getLines, getStops, getArrivalPredictions, getCorridors, getRoadSpeeds } from '../services/OlhoVivoAPI';  // Corrigido para apontar para a pasta correta
import { API_KEY, API_BASE_URL } from '../services/Config'; // Corrigido para apontar para a pasta correta

export default function InfoScreen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Aqui você pode buscar as informações que deseja mostrar
        const positions = await getVehiclePositions();
        const lines = await getLines();
        const stops = await getStops();
        const corridors = await getCorridors();
        const roadSpeeds = await getRoadSpeeds();
        
        setData({
          positions,
          lines,
          stops,
          corridors,
          roadSpeeds,
        });
      } catch (error) {
        console.error('Erro ao buscar informações:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações</Text>
      <Text>Posições dos Veículos: {JSON.stringify(data.positions)}</Text>
      <Text>Linhas: {JSON.stringify(data.lines)}</Text>
      <Text>Paradas: {JSON.stringify(data.stops)}</Text>
      <Text>Corredores: {JSON.stringify(data.corridors)}</Text>
      <Text>Velocidade nas Vias: {JSON.stringify(data.roadSpeeds)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
});
