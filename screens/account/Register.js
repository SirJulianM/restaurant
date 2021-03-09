import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RegisterForm from '../../components/Account/RegisterForm'

export default function Register() {
    return (
        <KeyboardAwareScrollView style={styles.container}>
            <Image 
                source={require("../../assets/adaptive-icon.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <RegisterForm />
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    image: {
        height: 150,
        width: "100%",
        marginBottom: 20
    }
})
