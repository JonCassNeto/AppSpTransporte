import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StopItem = ({ stop }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Parada ${stop.id}`}</Text>
      <Text>{stop.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StopItem;
