import { OBTENER_PRODUCTOS_EXITOS} from '../../types';


export default (state, action) =>{
    switch (action.type) {
        case OBTENER_PRODUCTOS_EXITOS:
            return {
              ...state,
              menu: action.payload
        }
        default:
                return state;
    }
}