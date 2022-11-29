import {
  View,
  Text
} from "react-native";

const Detail = ({ route }) => {
  return (
    <View><Text>{route.params.items.title} </Text></View>
  )
}

export default Detail