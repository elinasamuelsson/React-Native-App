import {ImageBackground, StyleSheet, Text, View, Pressable, Linking} from "react-native";
import CustomButton from "../components/CustomButton";
import {fontSize, fontWeight} from "../constants/typography";
import {colors} from "../constants/colors";

export default function HomeScreen({navigation}) {
	const ADDRESS = "Storagatan 123, 123 45 Stad";
	const PHONE_NUMBER = "+46012346789";

	async function openMaps() {
		const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
		await Linking.openURL(url);
	}

	async function openPhone() {
		await Linking.openURL(`tel:${PHONE_NUMBER}`);
	}

	return (
		<View style={styles.container}>
			<ImageBackground source={require("../assets/restaurant.jpg")} style={styles.background} resizeMode="cover">
				<Pressable onPress={() => navigation.navigate("Foods")}>
					<Text style={styles.foodText}>Go to foods</Text>
				</Pressable>
				<View style={styles.overlay}>
					<View style={styles.content}>
						<Text style={styles.title}>UseState() Of Mind</Text>
						<View style={styles.menuButton}>
							<CustomButton title="View Menu" onPress={() => navigation.navigate("Menu")} />
						</View>
					</View>
				</View>

				<View style={styles.footer}>
					<Text>Storagatan 123, 123 45 Stad</Text>
					<Text>Tel: 012-345 6789</Text>
				</View>

				<View style={styles.footer}>
					<Pressable onPress={openMaps}>
						<Text style={styles.addressText}>{ADDRESS}</Text>
					</Pressable>
					<Pressable onPress={openPhone}>
						<Text style={styles.addressText}>Tel: {PHONE_NUMBER}</Text>
					</Pressable>
				</View>

				<View style={styles.testButton}>
					<CustomButton
						title="Custom Button"
						onPress={() => console.log("Custom Button pressed")}
						variant="primary"
					/>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		justifyContent: "center",
	},
	background: {
		flex: 1,
	},
	overlay: {
		flex: 1,
		backgroundColor: colors.borders + "10",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 60,
	},
	content: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	menuButton: {
		marginTop: 24,
	},
	title: {
		fontSize: fontSize.xLarge,
		fontWeight: fontWeight.bold,
		paddingTop: 100,
		color: colors.background,
	},
	footer: {
		alignItems: "center",
		paddingBottom: 60,
		paddingTop: 20,
		backgroundColor: colors.surface,
	},
	foodText: {
		color: colors.background,
		fontSize: 20,
		textAlign: "center",
		paddingTop: 10,
	},
	addressText: {
		color: "rgb(0, 48, 136)",
		textDecorationLine: "underline",
		marginBottom: 4,
	},
	testButton: {
		position: "absolute",
		bottom: 130,
		left: 20,
		right: 20,
	},
});
