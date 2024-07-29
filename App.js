import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import VehiclePositionsScreen from './screens/VehiclePositionsScreen';
import LinesScreen from './screens/LinesScreen';
import StopsScreen from './screens/StopsScreen';
import ArrivalPredictionsScreen from './screens/ArrivalPredictionsScreen';
import CorridorsScreen from './screens/CorridorsScreen';
import RoadSpeedsScreen from './screens/RoadSpeedsScreen';
import { authenticate } from './services/OlhoVivoAPI';

const Tab = createBottomTabNavigator();

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
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="VehiclePositions" component={VehiclePositionsScreen} />
        <Tab.Screen name="Lines" component={LinesScreen} />
        <Tab.Screen name="Stops" component={StopsScreen} />
        <Tab.Screen name="ArrivalPredictions" component={ArrivalPredictionsScreen} />
        <Tab.Screen name="Corridors" component={CorridorsScreen} />
        <Tab.Screen name="RoadSpeeds" component={RoadSpeedsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
