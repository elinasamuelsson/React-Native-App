import {useState} from "react";
import {FlatList, StyleSheet, Text, View, Pressable} from "react-native";
import CustomButton from "../components/CustomButton";
import menu from "../data/menu";

import {colors} from "../constants/colors";
import {spacing} from "../constants/spacing";
import {fontSize, fontWeight} from "../constants/typography";
import HeaderText from "../components/HeaderText";
import SmallHeaderText from "../components/SmallHeaderText";
import BodyText from "../components/BodyText";

const categories = [...new Set(menu.map((item) => item.category))];

// Menysidan
export default function MenuScreen({navigation}) {
	const [selectedCategory, setSelectedCategory] = useState(categories[0]);

	// Filter för att bara visa rätter i vald kategori
	const filteredMenu = menu.filter((item) => item.category === selectedCategory);

	return (
		<View style={styles.container}>
			<View style={styles.headerText}>
				<HeaderText title="Menu" />
			</View>

			<FlatList
				data={categories}
				keyExtractor={(item) => item} // Kategorinamnet är unikt och funkar som nyckel
				horizontal
				showsHorizontalScrollIndicator={false}
				style={styles.categoryList}
				contentContainerStyle={styles.categoryContent}
				renderItem={({item}) => (
					<CustomButton
						title={item}
						// Vald kategori blir ifylld, resten får bara ram
						variant={item === selectedCategory ? "primary" : "secondary"}
						onPress={() => setSelectedCategory(item)}
					/>
				)}
			/>

			<FlatList
				data={filteredMenu}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={styles.menuContent}
				renderItem={({item}) => (
					// Ett kort per rätt
					<Pressable
						style={styles.card}
						onPress={() => {
							navigation.navigate("FoodInfo", {menuItem: item});
						}}
					>
						<View style={styles.row}>
							<SmallHeaderText title={item.name} />
							<Text style={styles.price}>{item.price} kr</Text>
						</View>
						<BodyText title={item.description} />

						{item.allergens.length > 0 && (
							<Text style={styles.allergens}>Allergener: {item.allergens.join(", ")}</Text>
						)}
					</Pressable>
				)}
			/>
		</View>
	);
}

// Stilar för menysidan
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		paddingTop: spacing.xxxLarge,
	},

	// Sidrubrik
	headerText: {
		margin: spacing.medium,
	},

	// flexGrow: 0 hindrar kategoriraden från att ta upp halva skärmen
	categoryList: {
		flexGrow: 0,
		flexShrink: 0,
	},

	// Avstånd mellan knapparna och till kanterna
	categoryContent: {
		gap: spacing.small,
		paddingHorizontal: spacing.medium,
		paddingBottom: spacing.medium,
	},

	// Luft runt rätterna
	menuContent: {
		paddingHorizontal: spacing.medium,
		paddingBottom: spacing.large,
	},

	// Kort för varje rätt
	card: {
		backgroundColor: colors.surface,
		borderRadius: spacing.small,
		padding: spacing.medium,
		marginBottom: spacing.small,
	},

	// Lägger namn och pris på samma rad, i var sin kant
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: spacing.xSmall,
	},
	price: {
		fontSize: fontSize.medium,
		fontWeight: fontWeight.bold,
		color: colors.secondaryAccent,
	},
	allergens: {
		marginTop: spacing.small,
		fontSize: fontSize.xSmall,
		color: colors.secondaryAccent,
	},
});
