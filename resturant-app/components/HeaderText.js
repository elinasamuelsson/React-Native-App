import {Text, StyleSheet} from "react-native";

import {colors} from "../constants/colors";
import {fontSize, fontWeight} from "../constants/typography";

import "../constants/colors";
import "../constants/typography";
import "../constants/spacing";

export default function HeaderText({title}) {
	return <Text style={styles.text}>{title}</Text>;
}

const styles = StyleSheet.create({
	text: {fontSize: fontSize.xLarge, fontWeight: fontWeight.bold, color: colors.secondaryText},
});
