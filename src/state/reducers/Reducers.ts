import { ActionTypes } from "../../action-type";
import { Action , IS} from "../actions/types"
const inistal = {
    users : []
}

const Reducers = (state : IS = inistal  ,action : Action) =>{
    console.log("chheck", action.type)
    switch(action.type){
        case ActionTypes.FETCH_USERS:
            // console.log(action.payload , "PAYLOAD")
            return {users : action.payload}
        case ActionTypes.ADD_USERS :
            console.log(action.payload , "ADDUSERS")
            return {
                users : [...state.users , action.payload],}
        case ActionTypes.DELETE_USERS : {
            return {
                ...state, 
                users : state.users.filter((ste:any)=> ste.id !== action.payload)
            }
        }
        case ActionTypes.UPDATE_USERS :
            return {
                ...state,
                
                users : action.payload}
        case ActionTypes.GET_USERS : 
        return {users :action.payload}
        default:
            return state

        }
        
}
export default Reducers;
