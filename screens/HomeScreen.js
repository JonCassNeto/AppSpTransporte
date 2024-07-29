// screens/HomeScreen.js
import React from 'react';
import { View, Button, StyleSheet, ImageBackground } from 'react-native'; // Remova a importação duplicada de Button

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/aiko.png')} // Substitua pelo caminho correto da imagem
        style={styles.backgroundImage}
      >
        <Button
          title="Acesso"
          onPress={() => navigation.navigate('LoginScreen')}
          style={styles.button}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
  },
});
