import React from "react";
import { Button, StyleSheet, TextInput, ToastAndroid, View, Image, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function HomeScreen({ navigation }: { navigation: any }) : JSX.Element {
    const navigateToPickerScreen = () => {
        navigation.navigate("FilePickerScreen")
    }

    return (
        <View style={{ backgroundColor: Colors.darker, flex: 1 }}>
            <Text style={styles.heading}>
                Hello User
            </Text>

            <Button onPress={e => navigateToPickerScreen()} title="To File picker"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 40,
        fontWeight: "600",
        color: "#F0AE1F",
        textAlign: "center",
        textAlignVertical: "center",
        marginVertical: 30
    },
})

export default HomeScreen;