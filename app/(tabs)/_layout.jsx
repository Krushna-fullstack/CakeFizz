import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Navbar from "../../components/Navbar";

const TabLayout = () => {
  return (
    <>
      <Navbar />
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="offers"
          options={{
            title: "Offers",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#fff" style="dark" />
    </>
  );
};

export default TabLayout;
