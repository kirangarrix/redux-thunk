import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import{ TodoReducer} from './reducer/TodoReducers'
const reducer=combineReducers({
    // contain all reducer
    Todo:TodoReducer
   
})


const initialState={}

const middleware=[thunk]

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
 )

 export default store;