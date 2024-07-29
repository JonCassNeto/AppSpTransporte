import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BusLineItem = ({ line }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{line.name}</Text>
      <Text>{`Número da Linha: ${line.number}`}</Text>
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

export default BusLineItem;
