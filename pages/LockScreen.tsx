import React, { useEffect, useState } from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PasswordModal from "../components/PasswordModal";

function LockScreen({ navigation }: { navigation: any }) : JSX.Element {
    const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true })
    const [isPwrdModalOpen, setIsPwrdModalOpen] = useState(false)

    function configureBiometrics() {
        rnBiometrics.isSensorAvailable().then((result) => {
            const { available, biometryType } = result;
    
            if (available && biometryType === BiometryTypes.TouchID) {
                ToastAndroid.show("TouchId supported", ToastAndroid.SHORT);
                startAuth()
            } else if (available && biometryType === BiometryTypes.Biometrics) {
                ToastAndroid.show("Biometrics supported", ToastAndroid.SHORT);
                startAuth()
            } else {
                ToastAndroid.show("Biometrics not supported", ToastAndroid.SHORT);
                // setIsPwrdModalOpen(true)
            }
        })
    }

    function startAuth() {
        rnBiometrics.simplePrompt({
            promptMessage: "Place fingerprint"
        }).then((result) => {
            if (result.success) {
                ToastAndroid.show("Successfully authenticated", ToastAndroid.SHORT);
                navigation.navigate("Login")
            } else {
                ToastAndroid.show("Authentication failed", ToastAndroid.SHORT);
            }
        })
    }

    const onSubmitPwrd = () => {
        ToastAndroid.show("PasswordSubmitted", ToastAndroid.SHORT);
    }

    useEffect(() => {
        configureBiometrics()
    }, [])

    return (
        <View style={styles.mainScreen}>
            <PasswordModal isOpen={isPwrdModalOpen} onSubmit={onSubmitPwrd} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        backgroundColor: Colors.darker,
        flex: 1
    }
})

export default LockScreen;