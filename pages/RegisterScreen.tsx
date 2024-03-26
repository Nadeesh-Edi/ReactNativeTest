import React, { useState } from "react";
import { Button, StyleSheet, TextInput, ToastAndroid, View, Image, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import auth from "@react-native-firebase/auth"
import OuterInputField from "../components/OuterInputField";

function RegisterScreen({ navigation }: { navigation: any }) : JSX.Element {
    const [username, setUsername] = useState("")
    const [pwrd, setPwrd] = useState("")

    const register = () => {
        auth().createUserWithEmailAndPassword(username, pwrd).then(() => {
            ToastAndroid.show("Register success", ToastAndroid.SHORT);
            navigation.navigate("Home");
        }).catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                ToastAndroid.show('That email address is already in use!', ToastAndroid.SHORT);
            }
            else if (error.code === 'auth/invalid-email') {
                ToastAndroid.show('That email address is invalid!', ToastAndroid.SHORT);
            } else {
                ToastAndroid.show(error.code, ToastAndroid.SHORT);
            }
        })
    }

    const goToLogin = () => {
        navigation.navigate("Login")
    }

    return (
        <View style={{ backgroundColor: Colors.darker, flex: 1 }}>
            <View style={{ flex: 1 }}></View>
            <View style={styles.mainView}>
                <View
                    style={{ flexDirection: "row" }}
                >
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 1 }}>
                    <Image
                        source={{ uri: "https://png.pngtree.com/png-clipart/20210311/original/pngtree-film-reel-icon-design-template-vector-isolated-png-image_5979353.jpg" }}
                        style={styles.logo}
                    />
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                
                <Text style={styles.heading}>
                    Register
                </Text>
                
                <OuterInputField 
                    label="Please enter email" 
                    value={username}
                    change={setUsername}
                />
                <OuterInputField 
                    label="Please enter password" 
                    value={pwrd}
                    change={setPwrd}
                    isPassword={true}
                />
                <Button
                    title="LOGIN"
                    color="#F0AE1F"
                    onPress={register}
                />

                <Text style={styles.linkText} onPress={goToLogin}>
                    Login ?
                </Text>
            </View>
            <View style={{ flex: 1 }}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 3,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    logo: {
        width: "auto",
        height: "auto",
        paddingVertical: 30
    },
    heading: {
        fontSize: 40,
        fontWeight: "600",
        color: "#F0AE1F",
        textAlign: "center",
        marginVertical: 30
    },
    linkText: {
        fontSize: 10,
        color: "#F0AE1F",
        textAlign: "center",
        marginVertical: 30
    }
})

export default RegisterScreen;