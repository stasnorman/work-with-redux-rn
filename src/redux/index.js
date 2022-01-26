import axios from "axios"
import { combineReducers, createStore, applyMiddleware } from 'redux';


//actions
export const onUserLogin = ({email, password}) => {
    return async (dispatch) => {
        try {
            const responce = await axios.post('URL', {email, password});
            dispatch({type: 'DO_LOGIN', payload: responce.data});            
        } catch (error) {            
            dispatch({type: 'ON_ERROR', payload: error});            
        }
    }
}

export const onFetchProduct = () => {
    return async (dispatch) => {
        try {
            const responce = {
                data: [
                    {
                        name: "Macbook Pro",
                        price: '$1500'
                    },
                    {
                        name: "Iphone",
                        price: '$700'
                    },
                    {
                        name: "Dawnbook Pro",
                        price: '$1500000'
                    }
                ]
            }
            dispatch({type: 'FETCH_PRODUCTS', payload: responce.data});            
        } catch (error) {            
            dispatch({type: 'ON_ERROR', payload: error});            
        }
    }
}


//reducers
const userReducer = (state ={}, action) => {
    switch (action.payload) {
        case 'DO_LOGIN':
            return {
                ...state,
                user: action.payload
            };
        case 'FETCH_PRODUCTS':
            return {
            ...state,
            products: action.payload
            };
        case 'FETCH_PRODUCTS':
            return {
            ...state,
            appError: action.payload
            };
            default:
                return state;
    }
}



//root reducer
export const rootReducer = combineReducers({
    userReducer,
});  



//store


