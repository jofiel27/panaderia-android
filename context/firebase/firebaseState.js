import React, { useReducer } from "react";

import firebase  from '../../firebase'
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";

import { OBTENER_PRODUCTOS_EXITOS} from '../../types';
const FirebaseState = props => {

    

    //crear state inicial
    const initialState = {
        menu: []
    }
    //useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(FirebaseReducer, initialState);

    //FUNCION QUE SE EJECUTO PARA TRAER LOS PRODUCTOS
    const obtenerProductos = () => {
     
     //CONSULTA FIREBASE
     firebase.db.collection('ProductoN')
                .where('existencia','==',true)// traer solo los que esten en existencia
                .onSnapshot(manejarSnapshot);

       function manejarSnapshot(snapshot) {
        let platillos = snapshot.docs.map(doc =>{
            return {
                id: doc.id,
                ...doc.data()
            }
        });
        //tenemos resultados
        dispatch({
            type: OBTENER_PRODUCTOS_EXITOS,
            payload: platillos
    
         });

       }         

    }
    return (
        <FirebaseContext.Provider
                value={{
                    menu: state.menu,
                    firebase,
                    obtenerProductos

                }}
        >
                {props.children}
        </FirebaseContext.Provider>
    )
}
export default FirebaseState;