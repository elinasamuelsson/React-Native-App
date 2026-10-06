import {View, StyleSheet, FlatList} from "react-native";
import {spacing} from "../constants/spacing";

import HeaderText from "../components/HeaderText";
import BodyText from "../components/BodyText";
import CustomButton from "../components/CustomButton";
import menu from "../data/menu";
import WarningText from "../components/WarningText";
import SmallHeaderText from "../components/SmallHeaderText";

export default function FoodInfo({navigation}) {
	return (
		<View style={styles.outerContainer}>
			<View>
				<HeaderText title={menu[0].name} />
				<View style={styles.innerContainer}>
					<SmallHeaderText title="Beskrivning:" />
					<BodyText title={menu[0].description} />
				</View>
				<View style={styles.innerContainer}>
					<SmallHeaderText title="Pris:" />
					<BodyText title={menu[0].price} />
				</View>
				<View style={styles.innerContainer}>
					<SmallHeaderText title="Allergener:" />
					<FlatList
						data={menu[0].allergens}
						renderItem={({item}) => <WarningText title={item} />}
						keyExtractor={(item) => item.id}
					/>
				</View>
			</View>
			<View>
				<CustomButton title="Back to menu" onPress={() => navigation.navigate("Foods")} variant="secondary" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: {flex: 1, justifyContent: "space-between", padding: spacing.small},
	innerContainer: {paddingBottom: spacing.medium},
});
