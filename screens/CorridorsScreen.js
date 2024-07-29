import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getCorridors } from '../services/OlhoVivoAPI'; // Exemplo de função para obter corredores

export default function CorridorsScreen() {
  const [corridors, setCorridors] = useState([]);

  useEffect(() => {
    const fetchCorridors = async () => {
      try {
        const data = await getCorridors();
        setCorridors(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCorridors();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {corridors.map((corridor) => (
        <View key={corridor.id} style={styles.item}>
          <Text style={styles.title}>{corridor.name}</Text>
          <Text>{corridor.details}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
