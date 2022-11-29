import {
  View,
  Text
} from "react-native";

const Detail = ({ route }) => {
  return (
    <View className="flex flex-row p-4"><Text>{route.params.items.title} </Text></View>
  )
}

export default Detail