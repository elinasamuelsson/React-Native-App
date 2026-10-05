import {Text, StyleSheet} from "react-native";

import {colors} from "../constants/colors";
import {fontSize, fontWeight} from "../constants/typography";

export default function BodyText({title}) {
	return <Text style={styles.text}>{title}</Text>;
}

const styles = StyleSheet.create({
	text: {fontSize: fontSize.medium, fontWeight: fontWeight.regular, color: colors.primaryText},
});
