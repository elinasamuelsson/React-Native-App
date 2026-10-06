import {useState} from "react";
import {FlatList, StyleSheet, Text, View, Pressable} from "react-native";
import CustomButton from "../components/CustomButton";
import menu from "../data/menu";

const categories = [...new Set(menu.map((item) => item.category))];

// Menysidan
export default function MenuScreen({navigation}) {
	const [selectedCategory, setSelectedCategory] = useState(categories[0]);

	// Filter för att bara visa rätter i vald kategori
	const filteredMenu = menu.filter((item) => item.category === selectedCategory);

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Menu</Text>

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
							<Text style={styles.name}>{item.name}</Text>
							<Text style={styles.price}>{item.price} kr</Text>
						</View>
						<Text style={styles.description}>{item.description}</Text>

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
		backgroundColor: "#fff",
		paddingTop: 60,
	},

	// Sidrubrik
	heading: {
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 16,
	},

	// flexGrow: 0 hindrar kategoriraden från att ta upp halva skärmen
	categoryList: {
		flexGrow: 0,
		flexShrink: 0,
	},

	// Avstånd mellan knapparna och till kanterna
	categoryContent: {
		gap: 8,
		paddingHorizontal: 16,
		paddingBottom: 16,
	},

	// Luft runt rätterna
	menuContent: {
		paddingHorizontal: 16,
		paddingBottom: 24,
	},

	// Kort för varje rätt
	card: {
		backgroundColor: "#f7f7f7",
		borderRadius: 10,
		padding: 14,
		marginBottom: 10,
	},

	// Lägger namn och pris på samma rad, i var sin kant
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 4,
	},
	name: {
		fontSize: 17,
		fontWeight: "bold",
	},
	price: {
		fontSize: 17,
		fontWeight: "600",
		color: "#c0392b",
	},
	description: {
		color: "#444",
	},
	allergens: {
		marginTop: 6,
		fontSize: 12,
		color: "#888",
	},
});
