import {View, StyleSheet, FlatList} from "react-native";
import {spacing} from "../constants/spacing";
import {colors} from "../constants/colors";

import HeaderText from "../components/HeaderText";
import BodyText from "../components/BodyText";
import CustomButton from "../components/CustomButton";
import WarningText from "../components/WarningText";
import SmallHeaderText from "../components/SmallHeaderText";

export default function FoodInfoScreen({navigation, route}) {
	const {menuItem} = route.params;
	return (
		<View style={styles.outerContainer}>
			<View style={styles.card}>
				<HeaderText title={menuItem.name} />
				<View style={styles.innerContainer}>
					<SmallHeaderText title="Beskrivning:" />
					<BodyText title={menuItem.description} />
				</View>
				<View style={styles.innerContainer}>
					<SmallHeaderText title="Pris:" />
					<BodyText title={menuItem.price} />
				</View>
				{menuItem.allergens.length != 0 ? (
					<View style={styles.innerContainer}>
						<SmallHeaderText title="Allergener:" />
						<FlatList
							data={menuItem.allergens}
							renderItem={({item}) => <WarningText title={item} />}
							keyExtractor={(item) => item}
						/>
					</View>
				) : null}
			</View>
			<View style={styles.innerContainer}>
				<CustomButton title="Back to menu" onPress={() => navigation.navigate("Menu")} variant="secondary" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		justifyContent: "space-between",
		padding: spacing.medium,
		backgroundColor: colors.background,
	},
	innerContainer: {
		paddingBottom: spacing.xLarge,
	},
	card: {
		backgroundColor: colors.surface,
		padding: spacing.medium,
		borderRadius: spacing.large,
	},
});
