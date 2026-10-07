import {ImageBackground, StyleSheet, Text, View, Pressable} from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";

export default function HomeScreen({navigation}) {
	return (
		<View style={styles.container}>
			<ImageBackground source={require("../assets/restaurant.jpg")} style={styles.background} resizeMode="cover">
				<Pressable onPress={() => navigation.navigate("Foods")}>
					<Text style={{color: "white", fontSize: 20, textAlign: "center", paddingTop: 10}}>Go to foods</Text>
				</Pressable>
				<View style={styles.overlay}>
					<View style={styles.content}>
						<Text style={styles.title}>UseState() Of Mind</Text>

						<View style={styles.menuButton}>
							<CustomButton title="View Menu" onPress={() => navigation.navigate("Menu")} />
						</View>
					</View>
				</View>
			</ImageBackground>

			<View style={styles.footer}>
				<Text>Storagatan 123, 123 45 Stad</Text>
				<Text>Tel: 012-345 6789</Text>
			</View>

			<View style={styles.testButton}>
				<CustomButton
					title="Custom Button"
					onPress={() => console.log("Custom Button pressed")}
					variant="primary"
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},
	background: {
		flex: 1,
	},
	overlay: {
		flex: 1,
		backgroundColor: "rgba(112, 93, 93, 0.4)",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 60,
	},
	content: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		paddingTop: 100,
		color: "#fff",

		menuButton: {
			marginTop: 24,
		},
	},
	footer: {
		alignItems: "center",
		padding: 30,
		backgroundColor: "#eee",
	},
	testButton: {
		position: "absolute",
		bottom: 100,
		left: 20,
		right: 20,
	},
});
