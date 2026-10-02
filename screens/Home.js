import { View, Text, Pressable } from "react-native";

export default function Home({ navigation }) {
    return (
        <View>
            <Text>Hello! I'm Home</Text>

            <Pressable onPress={() => navigation.navigate("Foods")}>
                <Text>Go to foods</Text>
            </Pressable>
        </View>
    )
}