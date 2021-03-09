import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getCurrent, isUserLogged } from '../../utils/actions';
import firebase from 'firebase/app';

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';


export default function Accounts() {
    const [login, setLogin] = useState(null);

    useEffect(() => {
        const user = getCurrentUser();
        setLogin(isUserLogged())
        //user ? setLogin(true) : setLogin(false)
        },[])


    if(login == null){
        return <text>Cargando...</text>
    }

    return login ? <UserLogged /> : <UserGuest />

}

const styles = StyleSheet.create({})
