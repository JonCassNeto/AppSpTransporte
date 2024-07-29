import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getRoadSpeeds } from '../services/OlhoVivoAPI'; 
export default function RoadSpeedsScreen() {
  const [roadSpeeds, setRoadSpeeds] = useState([]);

  useEffect(() => {
    const fetchRoadSpeeds = async () => {
      try {
        const data = await getRoadSpeeds();
        setRoadSpeeds(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoadSpeeds();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {roadSpeeds.map((road) => (
        <View key={road.id} style={styles.item}>
          <Text style={styles.title}>{road.name}</Text>
          <Text>{road.speed}</Text>
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
