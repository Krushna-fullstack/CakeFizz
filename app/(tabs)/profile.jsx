import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

const Profile = () => {
  const user = {
    name: "Jane Doe",
    email: "janedoe@example.com",
    profileImage: "https://via.placeholder.com/150", // Replace with actual image URL
    orders: [
      { id: 1, name: "Chocolate Cake", status: "Delivered" },
      { id: 2, name: "Vanilla Cake", status: "Pending" },
      { id: 3, name: "Red Velvet Cake", status: "Delivered" },
    ],
  };

  return (
    <View className="bg-gray-100 flex-1 p-4">
      {/* Profile Section */}
      <View className="items-center mb-6">
        <Image
          source={{ uri: user.profileImage }}
          className="w-32 h-32 rounded-full border-4 border-gray-300"
        />
        <Text className="mt-4 text-2xl font-semibold text-gray-800">
          {user.name}
        </Text>
        <Text className="text-lg text-gray-500">{user.email}</Text>
      </View>

      {/* Orders Section */}
      <Text className="text-xl font-semibold text-gray-800 mb-4">
        Your Orders
      </Text>
      <ScrollView className="space-y-4">
        {user.orders.map((order) => (
          <View key={order.id} className="bg-white p-4 rounded-lg shadow-md">
            <Text className="text-lg font-semibold text-gray-800">
              {order.name}
            </Text>
            <Text className="text-sm text-gray-500">{order.status}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Logout Button */}
      <TouchableOpacity className="mt-6 bg-red-500 p-3 rounded-lg items-center">
        <Text className="text-white text-lg font-semibold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
