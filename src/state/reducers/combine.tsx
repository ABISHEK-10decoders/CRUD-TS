import { combineReducers } from "redux";
import Reducers from './Reducers'


const combine = combineReducers( {
    customer : Reducers
});
export default combine
