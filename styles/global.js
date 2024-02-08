import {StyleSheet} from 'react-native';

const globalStyle = StyleSheet.create({
    contenedor:{
       flex: 1 ,
    },
     contenido: {
      marginHorizontal: '2.5%',
      flex: 1,
     },
     contenido3:{
        marginBottom:40,
        alignItems:'left',
        marginLeft:4,
        borderBottomColor: '#8E8E8E',
        borderBottomWidth: 1,
        marginBottom: 7,

     },
   
    imagen: {
         height: 200,
         width: '50%',
      
      

    },
    contenido:{
        margin: 'auto',
        flex:1,
        backgroundColor:'#DEDDDB',
        marginHorizontal:'3%',
        marginVertical:'3%',
        borderRadius:20,
        
    },
    boton:{
        backgroundColor: '#AE2C1E',
        width: '80%',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 7,
        marginTop: 10,
        borderRadius: 10,
    },

    botonTexto:{
        textTransform: 'uppercase',
        fontWeight:'bold',
        color:'white',
        textAlign: 'center',
        fontSize: 20,
    },
    boton2:{
       justifyContent: 'center',
       height: 80,
       width: '30%',
       fontSize: 80,
       backgroundColor:'#D28B2D',
       color:'withe'
      

    },
    boton3:{
        justifyContent: 'center',
        height: 80,
        fontSize: 80,
         width: '30%',
       backgroundColor:'#AE2C1E',
       color:'withe'        
    },
   
    contenedor2:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom:20,
     
      
     
    },
    contenedor5:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom:20,
        backgroundColor:'#DEDDDB',
        width:'100%',
        borderRadius:13,
        alignItems:'center',
        alignContent:'center'
        

      
     
    },
    titulo:{
        marginTop:10,
        marginBottom:10,
        justifyContent: 'center',
        fontSize: 30,
        textAlign: 'center',
        color:'#DC8819',
        fontWeight:'bold',
        marginBottom:10,
    },
    titulo5:{
        marginTop:10,
        justifyContent: 'center',
        fontSize: 23,
        textAlign: 'center',
        color:'#71470F',
        fontWeight:'bold',
        marginBottom:5,
       
    },
    tituloFactura:{
        color:'gray',

    },
    contenidoFactura:{
   width:'100%'
    },
    titulo4:{
        justifyContent: 'center',
        fontSize: 20,
        textAlign: 'center',
        color:'#DC8819',
        fontWeight:'900',
        marginBottom:10,
    },
    input:{
        justifyContent: 'center',
        textAlign: 'center',
        padding: 20,
        alignItems: 'center',
        fontSize: 40,

    },
    imagen2:{
        height: 100,
        width: '50%',
        minWidth: 100,
        borderRadius:20,
        alignItems: 'center',


    },
    imagen3:{
        height: 100,
        width: '50%',
        minWidth: 100,
        borderRadius:20,
        paddingLeft:33,
        paddingHorizontal:30,
        alignContent:'center',
        marginRight:22


    },
    BotonDetalle:{
     backgroundColor: '#71470F',
     padding:15,
     marginHorizontal:'10.5%',
     borderRadius:20,
      marginTop: 60,
      marginBottom: 10,

    },
    descripcionDetalle:{
    color:'#86817B',
    marginBottom:3,
    textAlign:'justify'
    
    },
    textoBotonDetalle:{
        textAlign:'center',
        fontWeight:'bold',
        color:'white',
        fontSize:15
       

    },
    tituloBold:{
        fontWeight:'bold',
        marginHorizontal:'10%'

    },
    imagenDetalle:{
        borderRadius:20,
        alignItems: 'center',
        width:'80%',
        height:300,
        marginHorizontal:'10%',
        marginBottom:15,
    },
    imagenDetalle2:{
        borderRadius:20,
        alignItems: 'center',
        width:'80%',
        height:200,
        marginHorizontal:'10%',
        marginBottom:15,
   
    },
    imagenDetalle3:{
        borderRadius:20,
        alignItems: 'center',
        width:'80%',
        height:200,
        marginHorizontal:'10%',
        marginBottom:15,
        borderWidth: 1,
    borderColor: "black",
        
    },
    tituloBold2:{
        fontWeight: '900',
     

    },
    textoprecio:{
        color:'#DC8819',
        marginBottom:20,
        
     

    },
    BotonEliminar:{
        backgroundColor:"red",
        width: 35,
        borderRadius: 50,
        marginLeft:'90%',
        marginTop: 10
        
    },
    textoBoton:{
        color:'#DC8819',
        marginLeft:50

    },
    signo:{
        fontSize:20,
        textAlign:'center'
    },
    textoManu:{
        fontWeight:'bold',
        marginLeft:20
       
    },
    contenedorMenu:{
      
        marginHorizontal:20,
        marginBottom: 6,
        width:'90%'
   
        
       
    },
    titulo3:{
        color:'#DC8819',
        fontWeight:'900',
        marginLeft:200
    },
    imagenMenu:{
      backgroundColor:'black',
      borderRadius:2
    
        
    },
    contenedorMenu2:{
        marginBottom:7
    },
    contenedorDetalle:{
        paddingTop:3
    },
    SubTotal1:{
        margin:3,
        textAlign:'center',
        fontWeight:'900',
        marginBottom:20
      
    },
    BotonPedido:{
        marginRight:20
    }
    

})
export default globalStyle;