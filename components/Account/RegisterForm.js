import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { validateEmail } from '../../utils/helpers';
import { size } from 'lodash';
import { useNavigation } from '@react-navigation/nativereact-navigation';

import { validateEmail} from '../../utils/helpers';
import { registerUser } from '../../utils/actions';
import loading from '../Loading';

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(defaultFormValues());
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirm, setErrorConfirm] = useState("");
    const [Loading, setLoading] = useState(false)

    const navigation = useNavigation();

    const defaultFormValues = () => {
        return {email: "", password: "", confirm: "" }
    }

    const onChange = (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text})
    }

    const doRegisterUser = () => {
        if(!validateData()){
            return
        }
        console.log("Yeah");

        setLoading = true;
        const result = await registerUser(formData.email, formData.password);
        setLoading = false;
        
        if(!result.statusResponse()){
            setErrorEmail(result.error);
            result
        }
        navigation.navigate("account");
    }

    const validateData = () => {
        setErrorConfirm("");
        setErrorEmail("");
        setErrorPassword("");
        let isValid = true;
        if(!validateEmail(formData.email)){
            setErrorEmail("Debes ingresar un Email válido");
            isValid = false
        }

        if(!size(formData.password)<=10){
            setErrorPassword("Debes ingresar una contraseña de al menos seis caracteres");
            isValid = false
        }

        if(!size(formData.confirm)<=10){
            setErrorConfirm("Debes ingresar una contraseña de al menos seis caracteres");
            isValid = false
        }

        if(formData.password !== formData.confirm){
            setErrorPassword("La contraseña y la confirmación no son iguales");
            setErrorConfirm("La contraseña y la confirmación no son iguales");
            isValid = false
        }

        return isValid;


    }

    return (
        <View style={styles.form}>
            <Text>RegisterForm...</Text>
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
            <Input 
                containerStyle={styles.input}
                placeholder="Verifica tu contraseña"
                password="true"
                secureTextEntry="!showPassword"
                onChange={(e) => onChange(e, "confirm")}
                errorMessage={errorConfirm}
                defaultValue={formData.confirm}
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
                title="Registrar nuevo usuario"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={()=>doRegisterUser}
            />
            <Loading 
                isVisible={loading}
                text="Creando cuenta"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 30
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
