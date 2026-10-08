import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// Screens som finns i appen
import HomeScreen from "./Screens/HomeScreen.js";
import FoodInfo from "./Screens/FoodInfo.js";
import MenuScreen from "./Screens/MenuScreen.js";

// Skapar stack-navigatorn som hanterar växlingen mellan screens
const Stack = createNativeStackNavigator();

export default function App() {
	// Home är startsidan, Menu visar kategorier och rätter,
	// FoodInfo visar en enskild rätt som skickas med som params
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						title: "Home",
					}}
				/>

				<Stack.Screen
					name="FoodInfo"
					component={FoodInfo}
					options={({route}) => ({
						title: route.params.menuItem.title,
					})}
				/>

				<Stack.Screen
					name="Menu"
					component={MenuScreen}
					options={{
						title: "Menu",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}