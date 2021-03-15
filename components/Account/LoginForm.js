import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/nativereact-navigation';

import loading from '../Loading';

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(defaultFormValues());
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [Loading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
            <Input 
                containerStyle={styles.input}
                placeholder="Ingresa tu E-mail"
                onChange={(e) => onChange(e, "email")}
                errorMessage={errorEmail}
                defaultValue={formData.email}
            />
            <Input 
                containerStyle={styles.input}
                placeholder="Ingresa tu contraseña"
                password="true"
                secureTextEntry="!showPassword"
                onChange={(e) => onChange(e, "password")}
                errorMessage={errorPassword}
                defaultValue={formData.password}
                rightIcon={
                    <Icon 
                        type="material-community"
                        name={ showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Button 
                title="Iniciar Sesión"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={()=>doRegisterUser}
            />
            <Loading 
                isVisible={loading}
                text="Iniciando Sesión..."
            />
        </View>
    )
}

const navigation = useNavigation();

const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text})
}

const defaultFormValues = () => {
    return {email: "", password: "" }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 30,
    },
    input: {
        width: "100%"
    },
    btnContainer: {
        marginTop: 20,
        width: "95%",
        alignSelf: "center"
    },
    btn:{
        //background-color
    },    
    icon: {
        color: "#c1c1c1"
    }
})
