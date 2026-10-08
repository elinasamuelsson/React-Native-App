import {ImageBackground, StyleSheet, Text, View, Linking} from "react-native";

import CustomButton from "../components/CustomButton";
import CustomLinkPressable from "../components/CustomLinkPressable";

import {fontSize, fontWeight} from "../constants/typography";
import {colors} from "../constants/colors";
import {spacing} from "../constants/spacing";

export default function HomeScreen({navigation}) {
	// Restaurangens uppgifter som används i kontaktlänkarna längst ner
	const ADDRESS = "Storagatan 123, 123 45 Stad";
	const PHONE_NUMBER = "+46012346789";

	// Öppnar adressen i telefonens kartapp
	async function openMaps() {
		const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
		await Linking.openURL(url);
	}

	// Öppnar telefonappen med restaurangens nummer
	async function openPhone() {
		await Linking.openURL(`tel:${PHONE_NUMBER}`);
	}

	return (
		<View style={styles.container}>
			<ImageBackground source={require("../assets/restaurant.jpg")} style={styles.background} resizeMode="cover">
				<View style={styles.overlay}>
					<View style={styles.content}>
						<Text style={styles.title}>UseState() Of Mind</Text>
						<View style={styles.menuButton}>
							<CustomButton title="View Menu" onPress={() => navigation.navigate("Menu")} />
						</View>
					</View>
				</View>

				<View style={styles.footer}>
					<CustomLinkPressable title={ADDRESS} icon="location-dot" onPress={openMaps} />
					<CustomLinkPressable title={PHONE_NUMBER} icon="phone" onPress={openPhone} />
				</View>
			</ImageBackground>
		</View>
	);
}

// Stilar för startsidan
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
		paddingTop: spacing.xxxLarge,
	},
	content: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	menuButton: {
		marginTop: spacing.large,
	},
	title: {
		fontSize: fontSize.xLarge,
		fontWeight: fontWeight.bold,
		paddingTop: spacing.largest,
		color: colors.surface,
	},
	footer: {
		alignItems: "center",
		paddingBottom: spacing.xxxLarge,
		paddingTop: spacing.large,
		backgroundColor: colors.surface,
	},
});
