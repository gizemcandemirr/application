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
import classNames from "classnames";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2801",
        title: "Ray",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f02",
        title: "Kasa",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d03",
        title: "Motor",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d04",
        title: "Pano",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d05",
        title: "Regülator",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d06",
        title: "Süspansiyon & Halat",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d07",
        title: "Kabin",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d08",
        title: "Ağırlık",
    },
];

const Item = ({ item, onPress, selectedId }) => (
    <TouchableOpacity
        onPress={onPress}
        className={classNames('flex flex-row justify-between items-center p-4 my-2 mx-4 rounded-xl bg-gray-200 ', { 'bg-gray-400': selectedId })}
    >
        <Text>{item.title}</Text>
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
                selectedId={item.id === selectedId}
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
