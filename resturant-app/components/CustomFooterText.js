import {Pressable, Text} from "react-native";
import {colors} from "../constants/colors";

export default function CustomFooterText({message, onPress}) {
	return (
		<Pressable onPress={onPress}>
			{({pressed}) => (
				<Text
					style={{
						color: pressed ? colors.primaryAccent : undefined,
						textDecorationLine: pressed ? "underlined" : "none",
					}}
				>
					{message}
				</Text>
			)}
		</Pressable>
	);
}
