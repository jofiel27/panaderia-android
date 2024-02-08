import React, { useState, useContext, useEffect } from "react";
import { Text, Image, View, TouchableOpacity, Button, StyleSheet,TextInput} from "react-native";
import globalStyles from '../styles/global'
import PedidosContext from "../context/pedidos/pedidosContext";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';


const  DetallePlatillo = () => {
// STATE PARA CANTIDADES
const [cantidad, guardarCantidad] = useState(1);
const [total, guardarTotal] = useState(0);

//context
const {platillo, guardarPedido} = useContext(PedidosContext);

const { Producto, imagen, descripcion, precio, categoria} = platillo;
const navigation = useNavigation();
console.log(platillo);
console.log(imagen);


//en cuanto el componente carga calcular la cantidad a pagar
useEffect(() =>{
 calcularTotal();
},[cantidad]);

//CALCULAR EL TOTL DEL PATILLO POR SU CANTIDAD
const calcularTotal = () => {
 const totalPagar = precio * cantidad;
 guardarTotal(totalPagar); 
}


// decrementa uno
const decrementarUno = () =>{

 if (cantidad > 1){
 const nuevaCantidad = parseInt(cantidad) - 1;
 guardarCantidad(nuevaCantidad);
}}
//se incrementa en uno la cantidad 
const incrementarUno = () =>{
     const nuevaCantidad = parseInt(cantidad) + 1;
     guardarCantidad(nuevaCantidad);
}
//confirmar si orden esta correcta
const confirmarOrden = () => {
       Alert.alert(
         '¿Deseas Confirmar tu orden?',
         'Un pedido confirmdo ya no se podra modificar',
         [
           {
             text:'Confirmar',
             onPress: () =>{
               //almacenar el pedido al pedido principal
               const pedido = {
                   ...platillo,
                   cantidad,
                   total
               }
              
               guardarPedido(pedido);
               //navegar hacia el resumen
               navigation.navigate("ResumenPedido")
             },
           },
           {
             text:'Cancelar',
             style: 'cancel'
           }
         ] 
       )
}
    //Pedido Context



    return (
      <ScrollView style={globalStyles.contenedor}>
        <View style={globalStyles.contenido}>
            <Text style={globalStyles.titulo}>{Producto}</Text>
            

            <View>
              <View>
                <Image style={globalStyles.imagenDetalle} source={{uri: imagen}}
                />
              </View>
            </View>
            <View  style={globalStyles.contenido3}>
            <Text style={globalStyles.tituloBold}>Descripcion Del Producto: <Text style={globalStyles.descripcionDetalle}>{descripcion}</Text></Text>
            <Text style={globalStyles.tituloBold}>Precio: <Text style={globalStyles.textoprecio}> {precio}Bs </Text></Text>
            <Text style={globalStyles.tituloBold} >Tipo: <Text style={globalStyles.textoprecio}>{categoria}</Text></Text>
            </View>
        </View>
        <View style={globalStyles.contenedorDetalle} >

        <Text style={globalStyles.titulo4}>Cantidad: {cantidad} </Text>
      
      <Text style={globalStyles.SubTotal1}> SubTotal: bs {total}</Text>
     
      <View style={globalStyles.contenedor2}>
        
      <View style={globalStyles.boton3}>
      <Button
            style={globalStyles.boton3}
            title="-"
            color={'#AE2C1E'}
            onPress={ () => decrementarUno() }
            
            />
         </View>
           <View Style={globalStyles.boton2}>
            <TextInput
            Style={globalStyles.titulo}
            value={cantidad.toString()}
            keyboardType="numeric"
            onChangeText={ cantidad => guardarCantidad(cantidad)  }
            />
           </View>
         <View style={globalStyles.boton2}>

         <TouchableOpacity onPress={ () => incrementarUno()} style={globalStyles.signo}>
         <Text  style={globalStyles.signo} > + </Text>
        
         </TouchableOpacity>
         </View>

      </View>
    
      <View  style={globalStyles.BotonDetalle}>
              <TouchableOpacity
              
              onPress={() => confirmarOrden()}>
                <View>
                <Text style={globalStyles.textoBotonDetalle}>
                         Agregar al Pedido
                </Text>
                </View>
               
              </TouchableOpacity>
            </View>
      </View>
      </ScrollView>
       
    );
};

export default DetallePlatillo;