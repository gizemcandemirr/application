import React, { useState } from "react";
import {
    FlatList,
    SafeAreaView,
    Text,
    RefreshControl,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

import ChevronRight from "../components/Icons/ChevronRight";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d74",
        title: "Fourth Item",
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity
        onPress={onPress}
        style={[backgroundColor]}
        className="flex flex-row justify-between items-center"
    >
        <Text style={[textColor]}>{item.title}</Text>
        <ChevronRight className="w-6 h-6 text-gray-500" />
    </TouchableOpacity>
);

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);
    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? "white" : "black";

        function NavigateToDetail(id) {
            setSelectedId(id);
            const findItem = DATA.find((item) => item.id === id)
            navigation.navigate('Detail', {
                items: findItem,
            });
        }

        return (
            <Item
                item={item}
                onPress={() => NavigateToDetail(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
};



export default Projects;
