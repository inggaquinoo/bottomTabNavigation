import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },

    textoHoshii:{
        fontSize: 60,
        color: 'white',
        marginTop: -400,

    },
    inputusername:{
        backgroundColor: 'white',
        fontSize: 30,
        marginTop: 100
    },
    botoningresar:{
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 10,
        width: 130,
        height: 40,
        borderWidth: 3
    },
    textobotoningresar:{
        width: 100,
        height: 100,
        borderRadius: 20,
        marginLeft: 5,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    botonsalir:{
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 10,
        width: 130,
        height: 40,
        borderWidth: 3
    },
    textobotonsalir:{
        width: 100,
        height: 100,
        borderRadius: 20,
        marginLeft: 5,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });
