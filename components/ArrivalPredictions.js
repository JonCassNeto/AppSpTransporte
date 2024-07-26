import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getArrivalPredictions } from '../services/OlhoVivoAPI';

const ArrivalPredictions = ({ stopId }) => {
    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        const fetchPredictions = async () => {
            const data = await getArrivalPredictions(stopId);
            setPredictions(data);
        };

        fetchPredictions();
    }, [stopId]);

    return (
        <View>
            {predictions.map((prediction) => (
                <View key={prediction.VehicleId}>
                    <Text>{`Bus ${prediction.VehicleId} will arrive in ${prediction.ArrivalTime} minutes`}</Text>
                </View>
            ))}
        </View>
    );
};

export default ArrivalPredictions;
