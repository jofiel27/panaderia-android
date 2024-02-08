import React, { useState, useContext, useEffect } from "react";
import { Text, Image, View, TouchableOpacity,Button, StyleSheet,TextInput } from "react-native";
import globalStyles from '../styles/global';
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PedidosContext from "../context/pedidos/pedidosContext";

const FormularioPlatillo = () => {
// STATE PARA CANTIDADES
 const [cantidad, guardarCantidad] = useState(1);
 const [total, guardarTotal] = useState(0);

 //context
 const {platillo, guardarPedido} = useContext(PedidosContext);
 const {precio} = platillo; 
 
 // rediccionar
 const navigation = useNavigation();

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

    return (
      <View style={globalStyles.contenedor} >

        <Text style={globalStyles.titulo}>Cantidad: {cantidad} </Text>
    
      <View style={globalStyles.contenedor2}>
        
      <View style={globalStyles.boton3}>
      <Button
            style={globalStyles.boton3}
            title="-"
            color={'#D28B2D'}
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
    
      <View >
      <Text >SubTotal: bs {total}</Text>
      </View>
      <View  style={globalStyles.boton2}>
              <TouchableOpacity
              
              onPress={() => confirmarOrden()}>
                <Text>
                         Agregar al Pedido
                </Text>
              </TouchableOpacity>
            </View>
      </View>
      
    );
    
}

export default FormularioPlatillo;