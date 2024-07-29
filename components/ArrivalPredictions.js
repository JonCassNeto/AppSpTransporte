import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ArrivalPredictionsComponent = ({ predictions }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={predictions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{`Veículo: ${item.vehicleId}`}</Text>
            <Text>{`Linha: ${item.line}`}</Text>
            <Text>{`Previsão: ${item.arrivalTime}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ArrivalPredictionsComponent;
