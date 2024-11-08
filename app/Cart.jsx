import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Chocolate Cake",
      image: "https://via.placeholder.com/200",
      price: "$25",
      quantity: 1,
    },
    {
      id: 2,
      name: "Vanilla Cake",
      image: "https://via.placeholder.com/200",
      price: "$20",
      quantity: 2,
    },
  ];

  const totalAmount = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  return (
    <View className="bg-gray-100 p-4 flex-1">
      <Text className="text-3xl font-bold my-4 text-center text-gray-800">
        Your Cart
      </Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="bg-white rounded-lg shadow-md mb-4 p-4">
            <View className="flex-row items-center">
              <Image
                source={{ uri: item.image }}
                className="w-20 h-20 rounded-lg mr-4"
              />
              <View>
                <Text className="text-lg font-semibold text-gray-800">
                  {item.name}
                </Text>
                <Text className="text-sm text-gray-500">
                  Price: {item.price}
                </Text>
                <Text className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </Text>
              </View>
            </View>
          </View>
        )}
      />

      <View className="bg-white p-4 rounded-lg shadow-md mt-4">
        <Text className="text-xl font-semibold text-gray-800">
          Total Amount: ${totalAmount.toFixed(2)}
        </Text>
      </View>

      <TouchableOpacity className="bg-green-500 p-4 rounded-lg items-center mt-6">
        <Text className="text-white text-lg font-semibold">
          Proceed to Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
