// components/CorridorsDisplay.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CorridorsDisplay = ({ corridors }) => {
  return (
    <View style={styles.container}>
      {corridors.map((corridor) => (
        <View key={corridor.id} style={styles.card}>
          <Text style={styles.title}>{corridor.name}</Text>
          <Text>{corridor.details}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CorridorsDisplay;
