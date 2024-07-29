import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getLines } from '../services/OlhoVivoAPI';

export default function LinesScreen() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const fetchLines = async () => {
      try {
        const data = await getLines();
        setLines(data);
      } catch (error) {
        console.error('Erro ao buscar linhas de ônibus', error);
      }
    };

    fetchLines();
  }, []);

  return (
    <View style={styles.container}>
      {lines.map((line) => (
        <Text key={line.id}>{line.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
