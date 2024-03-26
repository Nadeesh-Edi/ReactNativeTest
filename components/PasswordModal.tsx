import React, { Dispatch, FC, SetStateAction } from "react";
import { StyleSheet, View, Modal, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface PasswordModalProps {
    isOpen: boolean,
    onSubmit: () => void
}

const PasswordModal: FC<PasswordModalProps> = (props): JSX.Element => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.isOpen}
                onRequestClose={() => {
                }}>
                    <Text>Please Enter your password</Text>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: Colors.darker
    },
})

export default PasswordModal;