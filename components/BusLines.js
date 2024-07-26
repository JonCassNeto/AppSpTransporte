import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getBusLines } from '../services/OlhoVivoAPI';

const BusLines = () => {
    const [busLines, setBusLines] = useState([]);

    useEffect(() => {
        const fetchBusLines = async () => {
            const lines = await getBusLines();
            setBusLines(lines);
        };

        fetchBusLines();
    }, []);

    return (
        <View>
            <FlatList
                data={busLines}
                keyExtractor={(item) => item.LineCode.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.LineName}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default BusLines;
