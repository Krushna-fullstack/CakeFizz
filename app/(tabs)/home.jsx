import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Banner from "../../components/Banner";
import { Categories } from "../../data/Categories";

const CategoryList = () => {
  return (
    <FlatList
      data={Categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className="items-center mx-3 mt-4 bg-white p-4 rounded-lg shadow-lg">
          <Image
            source={item.image}
            className="w-24 h-24 rounded-full mb-3 border-2 border-pink-300"
          />
          <Text className="text-center text-lg font-semibold text-gray-800">
            {item.name}
          </Text>
        </View>
      )}
    />
  );
};

const CakeList = () => {
  const cakes = [
    {
      id: 1,
      name: "Chocolate Cake",
      image: "https://via.placeholder.com/200",
      price: "$25",
    },
    {
      id: 2,
      name: "Vanilla Cake",
      image: "https://via.placeholder.com/200",
      price: "$20",
    },
    {
      id: 3,
      name: "Red Velvet Cake",
      image: "https://via.placeholder.com/200",
      price: "$30",
    },
    {
      id: 4,
      name: "Strawberry Cake",
      image: "https://via.placeholder.com/200",
      price: "$28",
    },
  ];

  return (
    <FlatList
      data={cakes}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className="bg-white rounded-lg shadow-lg mx-3 p-4">
          <Image
            source={{ uri: item.image }}
            className="w-36 h-36 rounded-lg mb-4"
          />
          <Text className="text-lg font-semibold text-gray-800">
            {item.name}
          </Text>
          <Text className="text-sm text-gray-500">{item.price}</Text>
          <TouchableOpacity className="mt-4 bg-pink-500 p-3 rounded-full">
            <Text className="text-white font-semibold text-sm">Order Now</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const Home = () => {
  return (
    <ScrollView className="bg-gray-50 p-5">
      {/* Shop by Category Section */}
      <Text className="text-2xl font-semibold text-gray-800 mb-5">
        Shop by Category
      </Text>
      <CategoryList />

      {/* Banner Section */}
      <Banner />

      {/* Featured Cakes Section */}
      <Text className="text-2xl font-semibold text-gray-800 mt-8 mb-5">
        Featured Cakes
      </Text>
      <CakeList />

      {/* Special Offers Section */}
      <Text className="text-2xl font-semibold text-gray-800 mt-6">
        Special Offers
      </Text>
      <View className="bg-yellow-100 p-5 rounded-xl mt-5 shadow-xl">
        <Text className="text-lg font-semibold text-gray-800">
          Limited Time Offer: Get 30% off on your first order!
        </Text>
        <TouchableOpacity className="mt-4 bg-pink-500 p-3 rounded-full items-center">
          <Text className="text-white font-semibold text-lg">Claim Offer</Text>
        </TouchableOpacity>
      </View>

      {/* Why Choose Us Section */}
      <Text className="text-2xl font-semibold text-gray-800 mt-8">
        Why Choose Us?
      </Text>
      <View className="bg-white p-6 rounded-lg shadow-lg mt-5">
        <Text className="text-lg text-gray-800 mb-3">
          - Wide variety of delicious cakes
        </Text>
        <Text className="text-lg text-gray-800 mb-3">
          - Freshly baked daily
        </Text>
        <Text className="text-lg text-gray-800">
          - Fast and reliable delivery
        </Text>
      </View>

      {/* Customer Reviews Section */}
      <Text className="text-2xl font-semibold text-gray-800 mt-8">
        Customer Reviews
      </Text>
      <View className="bg-white p-6 rounded-lg shadow-lg mt-5 pb-10">
        <Text className="text-lg text-gray-800">
          "The chocolate cake was absolutely delicious! Will order again!" -
          Sarahx
        </Text>
        <Text className="text-lg text-gray-800 mt-3">
          "Excellent customer service and quick delivery." - John
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;
