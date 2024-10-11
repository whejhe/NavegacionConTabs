import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import TestScreen1 from "../screens/TestScreen";
import TestScreen2 from "../screens/TestScreen2";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Test1" component={TestScreen1} />
      <Drawer.Screen name="Test2" component={TestScreen2} />
    </Drawer.Navigator>
  );
}
