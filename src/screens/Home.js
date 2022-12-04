import { View, Text } from "react-native";

import Building from "../components/Icons/Building";
import Buildings from "../components/Icons/Buildings";
import ClipboardTick from "../components/Icons/ClipboardTick";
import DocumentText from "../components/Icons/DocumentText";
import Edit from "../components/Icons/Edit";
import Location from "../components/Icons/Location";
import ArrowRight from "../components/Icons/ArrowRight";

const HomeScreen = ({ navigation }) => {

  return (
    <View className="flex py-32 px-5 space-y-3 bg-white h-full">
      <View className="text-xs bg-[#EBF5FD] flex flex-row py-2 px-2 items-center justify-between w-full rounded-xl">
        <View className="flex flex-row items-center gap-2">
          <View className="bg-white p-4 rounded-xl"><Building className="w-8 h-8" /></View>
          <View className="gap-2">
            <Text>Şantiyeler</Text>
            <Text className="text-gray-600">23</Text>
          </View>
        </View>
        <View>
          <Edit className="w-8 h-8" />
        </View>
      </View>
      <View className="text-xs bg-[#EBF5FD] flex flex-row py-2 px-2 items-center justify-between w-full rounded-xl">
        <View className="flex flex-row items-center gap-2">
          <View className="bg-white p-4 rounded-xl"><Buildings className="w-8 h-8" /></View>
          <View className="gap-2">
            <Text>Taşeronlar</Text>
            <Text className="text-gray-600">23</Text>
          </View>
        </View>
        <View>
          <Edit className="w-8 h-8" />
        </View>
      </View>
      <View className="text-xs bg-[#EBF5FD] flex flex-row py-2 px-2 items-center justify-between w-full rounded-xl">
        <View className="flex flex-row items-center gap-2">
          <View className="bg-white p-1 rounded-xl"><Location className="w-6 h-6" /></View>
          <View className="gap-2">
            <Text>Taşeron Konumları</Text>
          </View>
        </View>
        <View>
          <ArrowRight className="w-8 h-8" />
        </View>
      </View>
      <View className="text-xs bg-[#EBF5FD] flex flex-row py-2 px-2 items-center justify-between w-full rounded-xl">
        <View className="flex flex-row items-center gap-2">
          <View className="bg-white p-1 rounded-xl"><DocumentText className="w-6 h-6" /></View>
          <View className="gap-2">
            <Text>İstek ve Şikayetler</Text>
          </View>
        </View>
        <View>
          <ArrowRight className="w-8 h-8" />
        </View>
      </View>
      <View className="text-xs bg-[#EBF5FD] flex flex-row py-2 px-2 items-center justify-between w-full rounded-xl">
        <View className="flex flex-row items-center gap-2">
          <View className="bg-white p-1 rounded-xl"><ClipboardTick className="w-6 h-6" /></View>
          <View className="gap-2">
            <Text>İş Güvenliği Sözleşmesi</Text>
          </View>
        </View>
        <View>
          <ArrowRight className="w-8 h-8" />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
