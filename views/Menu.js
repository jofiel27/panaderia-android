import {
  View,
  StyleSheet,
  StatusBar,Text
} from "react-native";
import React, { useContext, useEffect } from "react";
import FirebaseContext from "../context/firebase/firebaseContext";
import PedidosContext from "../context/pedidos/pedidosContext";
import { ListItem, Avatar } from "@react-native-material/core";
import { ScrollView } from "react-native-gesture-handler";
import tw, { style } from "twrnc";
import { useNavigation } from "@react-navigation/native";
import globalStyles from '../styles/global';

const Menu = () => {
  // Context de Firebase
  const { menu, obtenerProductos } = useContext(FirebaseContext);

  // Context de pedido
  const { seleccionarPlatillo } = useContext(PedidosContext);

  // Hook para redireccionar
  const navigation = useNavigation();

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <View >
      <Text style={globalStyles.titulo}>Productos</Text>
      <StatusBar/>
      <ScrollView >
        <View style={globalStyles.contenedorMenu}>
          {menu.map((platillo, i) => {
            const { imagen, Producto, descripcion,id, precio } =
              platillo;
              
            return (
             
              <View key={id} style={globalStyles.contenedorMenu}>
        
                <ListItem 
                 
                  title={ <Text style={globalStyles.titulo3}>{Producto}</Text>}
                  secondaryText={<Text style={globalStyles.textoManu}>Precio:{<Text >Bs {precio}</Text>}</Text>}
                  leadingMode="avatar"
                 
                  leading={ <View ><Avatar style={globalStyles.imagenMenu} label={Producto} size={70} image={{uri:imagen}}/></View>}
                  onPress={() => {
                    // Eliminar algunas propiedades del platillo
                    const {existencia, ...platillo2} = platillo;

                    seleccionarPlatillo(platillo2);
                    navigation.navigate("DetallePlatillo");
                  }}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  separador: {
    backgroundColor: "#000",
   

  },
  separadorTexto: {},
  imagen: {
    width: 1,
    height: 1,
    padding:1,

  },
  contenedor:{
    width: '80%',
    paddingTop: 20,
    marginBottom: 10,
    flex: 2,
    margin:'auto',
    height: 100,
    minWidth: 150,   

},
texto:{
  paddingLeft:50,
  marginLeft:50,
},
contenido:{
  backgroundColor:'red'
}  
});

export default Menu;