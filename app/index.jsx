import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import CakeImage from "../assets/images/cake.jpg";

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-pink-100">
      <View className="flex flex-1 justify-center items-center px-6">
        <Image
          source={CakeImage}
          className="w-32 h-32 mb-4 rounded-full shadow-lg"
        />
        <Text className="text-3xl font-bold text-center text-rose-700 mb-2">
          Welcome to Cake Bliss!
        </Text>
        <Text className="text-lg text-center text-rose-600 mb-4">
          Indulge in the sweetest treats, crafted to perfection just for you.
        </Text>
        <Link
          href="/home"
          className="bg-rose-700 px-6 py-2 rounded-full shadow-md"
        >
          <Text className="text-white text-lg font-semibold">
            Discover Flavors
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Index;
