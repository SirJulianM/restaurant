import React from 'react'
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function UserGuest() {
    const navigation = useNavigation();
    return (
       <ScrollView
        centerContent
        style={styles.viewBody}
       >
           <Image 
                source={require("../../assets/splash.png")}
                resizeMode="contain"
                style={styles.image}
           />
           <Text style={styles.text}>Consulta tu perfil en Restaurants</Text>
           <Text style={styles.description}>
               ¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores restaurantes 
               de una forma sencilla, vota cual te ha gustado más y comenta como ha sido tu experiencia 
           </Text>
           <Button
                buttonStyle="Ver tu perfil"
                style={styles.button}
                onPress={()=> navigation.navigate("login")}
           />
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30
    },
    image:{
        height: 300,
        width: "100%",
        marginBottom: 18,
        textAlign: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 18,
        textAlign: "center"
    },
    description: {
        textAlign: 'justify',
        marginBottom: 20,
        //color: 
    },
    button: {
        backgroundColor: "#442484"
    }
})
