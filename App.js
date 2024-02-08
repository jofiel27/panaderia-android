import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import { StyleSheet} from 'react-native';

 

  import NuevaOrden from './views/NuevaOrden';
  import FormularioPlatillo from './views/FormularioPlatillo';
  import Menu from './views/Menu';
  import DetallePlatillo from './views/DetallePlatillo';
  import ResumenPedido from './views/ResumenPedido';
  import ProgresoPedido from './views/ProgresoPedido';
  import Creacion from './views/Creacion';


   //importar state de context 

   import FirebaseState from './context/firebase/firebaseState';
   import PedidosState from './context/pedidos/pedidosState';

   import BotonResumen from './components/ui/BotonResumen';
   
  
  const Stack = createStackNavigator();

  const  App = () => {
    return (
      <>
      <FirebaseState>
        <PedidosState>
      <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
          
          headerStyle:{
            backgroundColor: '#BA4326',
           
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            margin:'auto',
            padding:'auto',
          },
          headerTintColor: '#FFFFFF'
         }}
        >
          <Stack.Screen
            name= "NuevaOrden"
            component={NuevaOrden}
            options={{
              title:"SOHO-Bakers App"
            }}
                    />
           <Stack.Screen
            name= "Creacion"
            component={Creacion}
            options={{
              title:"Creando Usuario"
            }}
                    />
          <Stack.Screen
            name= "Menu"
            component={Menu}
            options={{
              title:"SOHO-Bakers",
              headerRight: props => <BotonResumen/>
            }}
                    />
          <Stack.Screen
            name= "DetallePlatillo"
            component={DetallePlatillo}
            options={{
              title:"Descripcion"
            }}
                    />
          <Stack.Screen
            name= "FormularioPlatillo"
            component={FormularioPlatillo}
            options={{
              title:"Formulario Platillo"
            }}
                    />
         <Stack.Screen
            name= "ProgresoPedido"
            component={ProgresoPedido}
            options={{
              title:"Progreso Pedido"
            }}
                    />
         <Stack.Screen
            name= "ResumenPedido"
            component={ResumenPedido}
            options={{
              title:"Pedido"
            }}
                    />
        </Stack.Navigator>
  
      </NavigationContainer>
      </PedidosState>
      </FirebaseState>
      </>
    );
  }
  export default App;
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    margin:'auto'
  }
});