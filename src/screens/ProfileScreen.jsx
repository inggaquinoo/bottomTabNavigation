import React, {useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

export const ProfileScreen = ({navigation}) => {
  
//Funcion eliminar datos
const remove = async() => {
    try{
        await AsyncStorage.removeItem("DataUser");
        console.log("datos borrados");
        navigation.navigate('LogIn');

    }catch(err){
        alert(err);
        
    }
};

    return (
    <View>
    <TouchableOpacity 
    style={styles.botonsalir}
    onPress={() => remove() }
    >
        <Text style={styles.textobotonsalir} >
            LogOut
        </Text>
    </TouchableOpacity>
    </View>
  )
}