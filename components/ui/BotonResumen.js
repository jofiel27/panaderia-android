import React,{useContext} from 'react';
import {Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PedidosContext from '../../context/pedidos/pedidosContext';
import globalStyles from '../../styles/global'

const BotonResumen = () => {
    const navigation = useNavigation();

    const {pedido} = useContext(PedidosContext);

    if(pedido.length === 0 ) return null
    return (
    <TouchableOpacity style={globalStyles.BotonPedido} onPress={()=> navigation.navigate('ResumenPedido')}>
        <Text style={globalStyles.textoBoton}>Pedido </Text>
    </TouchableOpacity>
    );
}

export default BotonResumen;