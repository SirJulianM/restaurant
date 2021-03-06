import {firebaseApp} from './firebase';
import * as firebase from 'firebase';
import 'firebase/firestore';

const database = firebase.firestore(firebaseApp);

export const isUserLogged = () => {
    let isLogged = false;
    firebase.auth().onAuthStateChanged((user) => {
        user !== null && (isLogged = true)
    })
    return isLogged
}

export const getCurrentUser = () =>{
    return firebase.auth().currentUser;
}

export const registerUser = async (email, password) => {
    const result = {statusResponse: true, error: null}
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
        result.error = "Este correo ya ha sido registrado"
    }
    return result
}