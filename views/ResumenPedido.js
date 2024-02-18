import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  Button,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import globalStyles from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import firebase from "../firebase";
import PedidosContext from "../context/pedidos/pedidosContext";
import { ListItem, Avatar } from "@react-native-material/core";
import { ScrollView } from "react-native-gesture-handler";
import { launchImageLibrary } from "react-native-image-picker";

const fecha = () => {
  // Obtén la fecha actual y hora en milisegundos
  var timestamp = new Date().getTime();

  // Crea un nuevo objeto Date con el timestamp
  var fecha = new Date(timestamp);

  // Obtiene día, mes y año
  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1; // Los meses comienzan desde cero, por lo que debes sumar 1
  var ano = fecha.getFullYear();

  // Añade cero inicial si es necesario
  var diaFormateado = dia < 10 ? "0" + dia : dia;
  var mesFormateado = mes < 10 ? "0" + mes : mes;

  // Formatea la fecha en el formato deseado (mes/día/año)
  var fechaFormateada = mesFormateado + "/" + diaFormateado + "/" + ano;
  return fechaFormateada;
};

const ResumenPedido = () => {
  const [referencia, guardarCantidad] = useState("Ingrese Numero");

  const handleGalleryClick = () => {
    console.log("ejecuta");
    const options = {
      title: "seleccione",
      storageOptions: {
        skipBackup: true,
        path: "image",
      },
    };

    launchImageLibrary(options, (response) => {
      console.log(response);
    });
  };

  const navigation = useNavigation();
  //context de pedido
  const { pedido, total, mostrarResumen, eliminarProducto, pedidoRealizado } =
    useContext(PedidosContext);

  useEffect(() => {
    calcularTotal();
  }, [pedido]);

  const calcularTotal = () => {
    let nuevoTotal = 0;
    nuevoTotal = pedido.reduce(
      (nuevoTotal, artitulo) => nuevoTotal + artitulo.total,
      0
    );

    mostrarResumen(nuevoTotal);
  };
  //funcion que redirecciona a progresopedido

  const progresoPedido = () => {
    Alert.alert(
      "Revisa tu pedido",
      "Una vez que realizas tu pedido no podras cambiarlo",
      [
        {
          text: "Confirmar",
          onPress: async () => {
            //crear objeto
            const pedidoObj = {
              completado: false,
              total: Number(total),
              orden: pedido,
              creado: fecha(),
              numeroReferencia: referencia,
            };

            console.log(pedidoObj);
            //escribir el pedido en firebase
            try {
              const pedido = await firebase.db
                .collection("Ordenes")
                .add(pedidoObj);
              pedidoRealizado(pedido.id);

              navigation.navigate("ProgresoPedido");
            } catch (error) {
              console.log(error);
            }
          },
        },
        { text: "Revisar", style: "cancel" },
      ]
    );
  };
  //ELIMINAR EL PRODUCTO

  const ConfirmarEliminar = (id) => {
    Alert.alert(
      "¿Deseas eliminar este Producto de la lista?",
      "eliminaras el producto del pedido",
      [
        {
          text: "Confirmar",
          onPress: () => {
            eliminarProducto(id);
          },
        },
        { text: "Cancelar", style: "cancel" },
      ]
    );
  };

  return (
    <ScrollView style={globalStyles.contenedor}>
      <View style={globalStyles.contenido}>
        <Text style={globalStyles.titulo5}>Pedido De Cliente</Text>
        {pedido.map((platillo, i) => {
          const { cantidad, Producto, imagen, id, precio } = platillo;
          return (
            <View key={id + i}>
              <TouchableOpacity
                style={globalStyles.BotonEliminar}
                onPress={() => ConfirmarEliminar(id)}
              >
                <Text style={globalStyles.textoBotonDetalle}>X</Text>
              </TouchableOpacity>

              <Image
                style={globalStyles.imagenDetalle2}
                source={{ uri: imagen }}
              />
              <View style={globalStyles.contenido3}>
                <Text style={globalStyles.titulo4}>{Producto}</Text>
                <Text style={globalStyles.tituloBold2}>
                  Cantidad:
                  <Text style={globalStyles.textoprecio}> {cantidad}</Text>{" "}
                </Text>
                <Text style={globalStyles.tituloBold2}>
                  Precio:{" "}
                  <Text style={globalStyles.textoprecio}> Bs {precio}</Text>
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <View style={globalStyles.contenido}>
        <Text style={globalStyles.titulo5}>Datos Del PagoMobil</Text>
        <Text style={globalStyles.tituloBold}>
          C.I: <Text style={globalStyles.descripcionDetalle}>XXXXXXXXXXX</Text>
        </Text>
        <Text style={globalStyles.tituloBold}>
          Banco: <Text style={globalStyles.descripcionDetalle}>XXXXXXXX</Text>{" "}
        </Text>
        <Text style={globalStyles.tituloBold}>
          Telefono:<Text style={globalStyles.descripcionDetalle}> XXXXXX </Text>
        </Text>
      </View>
      <View style={globalStyles.contenido}>
        <Text style={globalStyles.titulo5}>Transferencias</Text>
        <Text style={globalStyles.tituloBold}>
          C.I: <Text style={globalStyles.descripcionDetalle}>XXXXXXXXXXX</Text>
        </Text>
        <Text style={globalStyles.tituloBold}>
          Banco: <Text style={globalStyles.descripcionDetalle}>XXXXXXXX</Text>{" "}
        </Text>
        <Text style={globalStyles.tituloBold}>
          Nombre:<Text style={globalStyles.descripcionDetalle}> XXXXXX </Text>
        </Text>
      </View>

      <TouchableOpacity
        style={globalStyles.BotonDetalle}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={globalStyles.textoBotonDetalle}>seguir pidiendo</Text>
      </TouchableOpacity>

      <Text style={globalStyles.titulo5}>Ingrese Numero de Referencia</Text>
      <View style={globalStyles.contenedor5}>
        <View Style={globalStyles.boton4}>
          <TextInput
            Style={globalStyles.contenidoFactura}
            value={referencia.toString()}
            keyboardType="numeric"
            onChangeText={(referencia) => guardarCantidad(referencia)}
          />
        </View>
      </View>
      <Text style={globalStyles.titulo}>Total a Pagar: Bs {total} </Text>

      <View>
        <TouchableOpacity
          style={globalStyles.BotonDetalle}
          onPress={() => progresoPedido()}
        >
          <Text style={globalStyles.textoBotonDetalle}>
            Comprobante de Pedido
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ResumenPedido;
