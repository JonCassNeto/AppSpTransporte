import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import ArrivalPredictionsComponent from '../components/ArrivalPredictions';
import { getArrivalPredictions } from '../services/OlhoVivoAPI';

export default function ArrivalPredictionsScreen() {
  const [stopId, setStopId] = useState('');
  const [predictions, setPredictions] = useState([]);

  const fetchPredictions = async () => {
    if (stopId) {
      try {
        const data = await getArrivalPredictions(stopId);
        setPredictions(data);
      } catch (error) {
        console.error('Erro ao buscar previsões:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o ID da parada"
        value={stopId}
        onChangeText={setStopId}
        keyboardType="numeric"
      />
      <Button title="Buscar Previsões" onPress={fetchPredictions} />
      <ArrivalPredictionsComponent predictions={predictions} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
