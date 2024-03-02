import React, { useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert, Image, ScrollView, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imagenes from '../assets/SOHO.jpg'
import globalStyles from '../styles/global';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import auth from '@react-native-firebase/auth'
import firebase from 'firebase/compat/app';



const uri = 'https://www.cucinare.tv/wp-content/uploads/2020/01/Gontran-2-1024x579.jpg';
const profilePicture = 'data:image/png;base64,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';

const NuevaCuenta = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("")
  const fire = firebase;

  const handleCreateAccount = (userCredential) => {
    fire.auth().createUserWithEmailAndPassword(email, password).then(() =>{
      console.log('Cuenta Creada')
      const user = userCredential.user;
      console.log(user)
      Alert.alert('Cuenta Creada');
      navigation.navigate('Creacion')
    })
    .catch(error =>{
      console.log(error)
      Alert.alert(error.message)
    })
  } 


    const navigation = useNavigation();
    return (
    
      // <View style={[globalStyle.contenedor, styles.contenido]} >    
      // <Image style={globalStyles.imagenDetalle3} source={image}/>
      //    <TouchableOpacity
      //        onPress={() => navigation.navigate('Menu')}
      //         style={globalStyle.boton}>
      //               <Text style={styles.buttontext}>
      //                 Inicio
      //               </Text>
      //    </TouchableOpacity>
      // </View> 
      <View style = {styles.container} >
        <Image source={{ uri }} style = {[styles.image, StyleSheet.absoluteFill]} />
        <ScrollView contentContainerStyle = {{
          flex: 1,
          width:'100%',
          height:'100%',
          alignItems:'center',
          justifyContent:'center',
          
        }} >
            <Text style={globalStyles.titulo}>Creacion de Cuentaaaaaaaaaaa</Text>
          <View >
       
          <View style= {styles.login}>
          <Image source={{ uri: profilePicture }} style = {styles.profilePicture} />
          <View>
            <Text style= {{fontSize:17, fontWeight:400, color:'black', }}>Email </Text>
            <TextInput  value={email} onChangeText={(text) => setEmail(text)} style ={styles.input} placeholder='E-mail'/>          
          </View>
          <View>
            <Text style= {{fontSize:17, fontWeight:400, color:'black', }}>Contraseña </Text>
            <TextInput value={password} onChangeText={(text) => setPassword(text)}  style ={styles.input} placeholder='Contraseña' secureTextEntry={true} />          
          </View> 
          <View>
            <Text style= {{fontSize:17, fontWeight:400, color:'black', }}>Confirmar Contraseña </Text>
            <TextInput value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)}  style ={styles.input} placeholder='Confirma Contraseña' secureTextEntry={true} />          
          </View> 
          <TouchableOpacity onPress={handleSignIn} style= {styles.button} >
            <Text style= {{fontSize:17, fontWeight:400, color:'white', }}>Acceso</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleCreateAccount} style= {styles.button} >
            <Text style= {{fontSize:17, fontWeight:400, color:'white', }}>Crear una Cuenta</Text>
          </TouchableOpacity>
          </View>
          </View>
        </ScrollView>
      </View>
        
    );
}



const styles = StyleSheet.create({
   
  button: {
   width: 250,
   height: 40,
   borderRadius:10,
   backgroundColor:'#AE2C1E',
   alignItems:'center',
   justifyContent:'center',
   marginVertical:10,
   borderColor:'#fff',
   borderWidth: 1,
  },
 

  buttontext: {
    textAlign: 'center',
    color:'white',
    fontSize: 20,
    
  },
  contenido:{
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode: 'cover',
  },
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30

  },
  login:{
    width:350,
    height:540,
    borderColor:'#fff',
    borderWidth: 1,
    borderRadius:30,
    padding:10,
    alignItems:'center',
    backgroundColor:'#D5D8DC90'


  },
  profilePicture:{
    width: 100,
    height: 100,
    borderRadius:50,
    borderColor:'#fff',
    borderWidth: 1,
    marginVertical:30
  },
  input:{
    width:250,
    height:40,
    borderColor:'white',
    borderWidth: 1,
    borderRadius:10,
    padding:10,
    marginVertical:10,
    backgroundColor:'#ffffff80',
    marginBottom:20
  },

});

export default NuevaCuenta;