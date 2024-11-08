import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { useState } from "react";
import { Link } from "expo-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SafeAreaView>
      <View className="p-4 bg-gray-200">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
            <Ionicons name="menu-sharp" size={28} color="black" />
          </TouchableOpacity>

          <Text className="text-lg font-semibold text-black">CakeFizz</Text>

          <View className="flex-row gap-5">
            <FontAwesome6 name="heart" size={24} color="black" />
            <Link href="/Cart">
              <FontAwesome name="opencart" size={24} color="black" />
            </Link>
          </View>
        </View>

        {isOpen && (
          <View className="mt-4 fixed bg-white p-8 rounded-md shadow-md z-50">
            <Link
              onPress={() => setIsOpen(!isOpen)}
              href="/home"
              className="text-gray-700 mb-2"
            >
              Home
            </Link>
            <Link
              onPress={() => setIsOpen(!isOpen)}
              href="/home"
              className="text-gray-700 mb-2"
            >
              Shop
            </Link>
            <Link href="home" className="text-gray-700 mb-2">
              Favorites
            </Link>
            <Link href="home" className="text-gray-700">
              Contact
            </Link>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Navbar;
