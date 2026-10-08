import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HomeScreen from "./Screens/HomeScreen.js";
import FoodInfoScreen from "./Screens/FoodInfoScreen.js";
import MenuScreen from "./Screens/MenuScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
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
					component={FoodInfoScreen}
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
