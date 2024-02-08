import React, {useContext, useEffect, useState} from 'react';
import { Text, Image, View, TouchableOpacity,Button, StyleSheet,TextInput } from "react-native";
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import PedidosContext from '../context/pedidos/pedidosContext';
import { ScrollView } from 'react-native-gesture-handler';


const ProcesoPedido = () => {
    
   const { idpedido } = useContext(PedidosContext);
   const navigation = useNavigation();

    return (
      <ScrollView>
        <View style={globalStyles.contenidoFactura}>
          <Text style={globalStyles.titulo5}>Comprobante De Pedido</Text>

        </View>
       <Text style={globalStyles.titulo}>{ idpedido }</Text>
       <TouchableOpacity style={globalStyles.BotonDetalle} onPress={() => navigation.navigate('Menu')}>
                <Text style={globalStyles.textoBotonDetalle}>
                        Iniciar un Nuevo Pedido
                </Text>
              </TouchableOpacity>
      </ScrollView>
    );
}

export default ProcesoPedido;