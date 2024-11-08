import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "50% Off on Chocolate Cake",
      description: "Get 50% off on all chocolate cakes this week!",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Free Delivery on Orders Over $30",
      description: "Enjoy free delivery on cake orders over $30.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Buy 1 Get 1 Free on Cupcakes",
      description: "Buy one dozen cupcakes and get another free!",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <ScrollView className="bg-gray-100 flex-1 p-4">
      <Text className="text-2xl font-semibold text-gray-800 mb-6">
        Special Offers
      </Text>
      {offers.map((offer) => (
        <View key={offer.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
          <Image
            source={{ uri: offer.image }}
            className="w-full h-48 rounded-lg"
          />
          <Text className="text-xl font-semibold text-gray-800 mt-4">
            {offer.title}
          </Text>
          <Text className="text-gray-500 mt-2">{offer.description}</Text>
          <TouchableOpacity className="mt-4 bg-green-500 p-3 rounded-lg items-center">
            <Text className="text-white text-lg font-semibold">
              Claim Offer
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default Offers;
