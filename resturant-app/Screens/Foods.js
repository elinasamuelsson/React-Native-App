import { View, Text, Pressable } from "react-native";

export default function Home({ navigation }) {
    return (
        <View>
            <Text>Hello I'm foods</Text>
            <Pressable onPress={() => navigation.navigate("FoodInfo")}>
                <Text>Go to foodInfo</Text>
            </Pressable>
        </View>
    )
}