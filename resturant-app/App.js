import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Screens/HomeScreen.js";
import Foods from "./Screens/Foods.js";
import FoodInfo from './Screens/FoodInfo.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: "Home"
          }}
        />

        <Stack.Screen
          name="Foods" 
          component={Foods} 
          options={{
            title: "Foods"
          }}
        />

        <Stack.Screen
          name="FoodInfo" 
          component={FoodInfo} 
          options={{
            title: "FoodInfo"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
