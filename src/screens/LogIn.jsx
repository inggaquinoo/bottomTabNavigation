import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

export const LogIn = ({navigation}) => {
  
  const [User, setUser] = useState();

  //Funcion guardar datos
  const save = async() =>{
    try{
        await AsyncStorage.setItem("DataUser", User)
        //Envia a otra pantalla
        navigation.navigate('BottomTabs')


    }catch (err){
        alert(err);
    }
  };

  
  //Funcion cargar datos
  const load = async() => {
    try{
        let obtenerusuario = await AsyncStorage.getItem("DataUser")

        //Si obtener usuario es diferente de nulo es decir tiene un valor
        if (obtenerusuario !== null){
            setUser(obtenerusuario);
        }

    }catch(err){
        alert(err);
    }
    
    
  };


//Permite que al iniciar el APP o recargar el usuario aparezca
useEffect(() => {
  load();

}, [])

  return (
    
    <View style={styles.container} >
    <Text style = { styles.textoHoshii}>Hoshii</Text>

    <Text>Welcome: { User } </Text>

    <TextInput 
    
    style = { styles.inputusername }
    placeholder="Ingrese su usuario"
    autoCorrect={ false }
    onChangeText = {(text) => setUser(text) }
    />
    
    <TouchableOpacity
        style = { styles.botoningresar }
        onPress = { () => save() }
    >
        <Text
        style = { styles.textobotoningresar }
        >LogIn</Text>
    </TouchableOpacity>

</View>

  )
}
