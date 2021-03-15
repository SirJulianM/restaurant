import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import LoginForm from '../../components/Account/LoginForm'

export default function Login() {
    return (
        <ScrollView>
            <Image
                source={require("../../assets/splash.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <View style={styles.container}>
                <LoginForm />
                <CreateAccount />
            </View>
            <Divider style="styles.divider"/>
        </ScrollView>
    )
}

function CreateAccount(props){
    const navigation = useNavigation();
     return (
        <Text style={styles.register}
            onPress={()=>navigation.navigate("register")}
        >
        ¿Aún no tienes una cuenta?{""}
        <Text style={styles.btnRegister}>
            Registrate
        </Text>
    </Text>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: "100%",

    }, 
    container: {
        marginHorizontal: 40
    },
    register: {
        marginTop: 15,
        marginHorizontal: 10,
        alignSelf: "center"
    },
    btnRegister:{
        fontWeight: "bold",
        //color: 
    }
})
