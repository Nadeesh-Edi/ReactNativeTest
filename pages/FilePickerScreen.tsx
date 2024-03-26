import React, { useCallback, useState } from "react";
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker'

function FilePickerScreen() : JSX.Element {
    const [fileResponse, setFileResponse] = useState<DocumentPickerResponse[] | null>(null);

    const handleDocumentSelection = useCallback(async () => {
        try {
          const response = await DocumentPicker.pick({
            presentationStyle: 'fullScreen',
            allowMultiSelection: true
          });
          console.log(response);
          const arr = response.map(item => {
            return {
                name: item.name
            }
          })
          setFileResponse(response)
        } catch (err) {
          console.warn(err);
        }
      }, []);

    return (
        <>
        <View style={{ backgroundColor: Colors.darker, flex: 1 }}>
            <Text style={styles.text}>File page</Text>

            <SafeAreaView >
                <StatusBar barStyle={'dark-content'} />
                {fileResponse && fileResponse.map((file, index) => (
                    <Text
                    style={styles.text}
                    key={index.toString()}
                    numberOfLines={1}
                    ellipsizeMode={'middle'}>
                        {file.uri}
                    </Text>
                ))}
                <Button title="Select 📑" onPress={handleDocumentSelection} />
            </SafeAreaView>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: Colors.white
    }
})

export default FilePickerScreen;