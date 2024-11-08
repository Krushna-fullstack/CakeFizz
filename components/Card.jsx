import { View, Text, Image } from "react-native";
import React from "react";

const Card = ({ name, image, price }) => {
  return (
    <View className="bg-white p-4 rounded-lg shadow-lg">
      <Image source={{ uri: image }} className="w-full h-40 rounded-md" />
      <Text className="mt-4 text-lg font-semibold">{name}</Text>
      <Text className="text-xl text-green-500 mt-2">{price}</Text>
    </View>
  );
};

export default Card;
