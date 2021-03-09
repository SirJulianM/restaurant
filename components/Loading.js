import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export default function loading({isVisible, text}) {
    return (
        <Overlay
            isVisible = {isVisible}
            windowBackgroundColor = "rgba{0,0,0,.5}"
            overlayBackgroundColor = "transparent"
            overlayStyle={style.overlay}
            >
            <View style={style.view}>
                <ActivityIndicator 
                    size="large"
                    color=""
                />
                {
                    text && <Text>{text}</Text>
                }
            </View>
        </Overlay>
        
    )
}

const styles = StyleSheet.create({
    overlay : {
        height: 100,
        width: 200,
        backgroundColor: "#FFF",
        borderColor: "#442484",
        borderWidth: 2,
        borderRadius: 18
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        //color: ,
        marginTop: 10
    }

})
