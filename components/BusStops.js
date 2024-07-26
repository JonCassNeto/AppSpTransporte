import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getBusStops } from '../services/OlhoVivoAPI';

const BusStops = () => {
    const [busStops, setBusStops] = useState([]);

    useEffect(() => {
        const fetchBusStops = async () => {
            const stops = await getBusStops();
            setBusStops(stops);
        };

        fetchBusStops();
    }, []);

    return (
        <View>
            <FlatList
                data={busStops}
                keyExtractor={(item) => item.StopId.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.StopName}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default BusStops;
