import {StyleSheet, Pressable} from "react-native";
import {FontAwesomeFreeSolid} from "@react-native-vector-icons/fontawesome-free-solid";

import BodyText from "./BodyText";

import {spacing} from "../constants/spacing";
import {colors} from "../constants/colors";

export default function CustomButton({title, icon, onPress}) {
	return (
		<Pressable style={({pressed}) => [styles.row, pressed && styles.pressed]} onPress={onPress}>
			<BodyText title={title} />
			{icon && <FontAwesomeFreeSolid name={icon} color={colors.primaryText} />}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.7,
		transform: [{scale: 0.97}],
	},
	row: {
		flexDirection: "row",
		gap: spacing.small,
	},
});
