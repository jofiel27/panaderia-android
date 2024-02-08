import React, { useReducer } from "react";


import PedidosReducer from "./pedidosReducer";
import PedidosContext from "./pedidosContext";
import { SELECCIONAR_PRODUCTO, CONFIRMAR_ORDENAR_PLATILLO, MOSTRAR_RESUMEN, ELIMINAR_PRODUCTO, PEDIDO_ORDENADO} from '../../types';
const PedidosState = props => {

    

    //crear state inicial
    const initialState = {
        pedido: [],
        platillo: null,
        total:0,
        idpedido: '',
    }
    //useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(PedidosReducer, initialState);


    //Selecciona el producto del usuario 

    const seleccionarPlatillo = platillo => {
    dispatch({
        type:SELECCIONAR_PRODUCTO,
        payload: platillo
    })
    }
    //CAUNDO EL USUARIO CONFIRMA UN PLATILLO
    const guardarPedido = pedido => {
        dispatch({
            type:CONFIRMAR_ORDENAR_PLATILLO,
            payload: pedido
        })
    }
//muestra el tota a pagar en el resumen pedido
const mostrarResumen = total => {
    dispatch({
        type: MOSTRAR_RESUMEN,
        payload: total
    })
}

//eliminar del carrito
const eliminarProducto = id => {
   dispatch({
      type: ELIMINAR_PRODUCTO,
      payload: id
   })
}
//pedidoRealizado
const pedidoRealizado = id => {
    dispatch({
        type: PEDIDO_ORDENADO,
        payload: id
    })
}
    return (
        <PedidosContext.Provider
                value={{
                    pedido: state.pedido,
                    platillo: state.platillo,
                    total: state.total,
                    idpedido: state.idpedido,
                    seleccionarPlatillo,
                    guardarPedido,
                    mostrarResumen,
                    eliminarProducto,
                    pedidoRealizado

                }}
        >
                {props.children}
        </PedidosContext.Provider>
    )
}
export default PedidosState;