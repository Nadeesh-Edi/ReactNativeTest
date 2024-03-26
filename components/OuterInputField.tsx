import React, { Dispatch, FC, SetStateAction } from "react";
import {
    TextInput, StyleSheet
} from "react-native"

interface InputFieldProps {
    label: string,
    value: string,
    change: Dispatch<SetStateAction<string>>,
    isPassword?: boolean
}

const OuterInputField: FC<InputFieldProps> = (props) : JSX.Element => {

    return (
        <>
            <TextInput
                    style={styles.inputField}
                    underlineColorAndroid="#E3A31E"
                    onChangeText={props.change}
                    value={props.value}
                    placeholder={props.label}
                    secureTextEntry={props.isPassword}
                    placeholderTextColor="#8C6612"
                />
        </>
    )
}

const styles = StyleSheet.create({
    inputField: {
        color: "#E3A31E",
        // backgroundColor: "#73530F",
        paddingVertical: 10,
        marginVertical: 10
    }
})

export default OuterInputField;