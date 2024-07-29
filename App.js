import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import VehiclePositionsScreen from './screens/VehiclePositionsScreen';
import LinesScreen from './screens/LinesScreen';
import StopsScreen from './screens/StopsScreen';
import ArrivalPredictionsScreen from './screens/ArrivalPredictionsScreen';
import CorridorsScreen from './screens/CorridorsScreen';
import RoadSpeedsScreen from './screens/RoadSpeedsScreen';
import LoginScreen from './screens/LoginScreen';
import InfoScreen from './screens/InfoScreen';
import { authenticate } from './services/OlhoVivoAPI';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    // Autentica o aplicativo na inicialização
    const initAuth = async () => {
      try {
        await authenticate();
        console.log('Autenticação bem-sucedida');
      } catch (error) {
        console.error('Erro na autenticação', error);
      }
    };

    initAuth();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"> {/* Correção aqui */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="VehiclePositions" component={VehiclePositionsScreen} />
        <Stack.Screen name="Lines" component={LinesScreen} />
        <Stack.Screen name="Stops" component={StopsScreen} />
        <Stack.Screen name="ArrivalPredictions" component={ArrivalPredictionsScreen} />
        <Stack.Screen name="Corridors" component={CorridorsScreen} />
        <Stack.Screen name="RoadSpeeds" component={RoadSpeedsScreen} />
        <Stack.Screen name="Info" component={InfoScreen} options={{ title: 'Informações' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
