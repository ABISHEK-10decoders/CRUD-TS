import axios from "axios";
import { ActionTypes } from "../action-type";
import { Dispatch} from"redux"
import { Action } from  "../state/actions/types"

interface insital {
    id: string;
    email: string;
    phone: string;
    name: string;
}
export const addusers = ( users : insital) =>(dispatch: Dispatch<Action>)=>{
    axios
    .post(`https://6227174a2dfa52401813ed75.mockapi.io/users`, users)
    .then((data ) => {
        dispatch({
            type: ActionTypes.ADD_USERS,
            payload: data.data
        })
    })
    
}
export const fetchUsers = () => (dispatch: Dispatch<Action>)=>{
    axios
    .get("https://6227174a2dfa52401813ed75.mockapi.io/users")
    .then((user) => {
        // console.log(user,",.,.,.,,,.,.")
        // console.log("CONSOLELOG1",user.data)
        dispatch({
            type: ActionTypes.FETCH_USERS,
            payload: user.data
        })
        // return(dispatch : Dispatch)=>{
            

        // }
    })

}
export const deleteUser = (id: string) => (dispatch: Dispatch<Action>)=>{
    axios.delete(`https://6227174a2dfa52401813ed75.mockapi.io/users/${id}`)
    .then((users)=>{
        dispatch({
            type: ActionTypes.DELETE_USERS,
            payload:id
        })
        // return ( dispatch : Dispatch)=>{
            
        // }
    })
}

export const editUser = (users : any, id:string) => (dispatch: (arg0: any) => void) =>  {
    console.log("editUser", users)
    axios.put(`https://6227174a2dfa52401813ed75.mockapi.io/users/${id}`, users)
    .then(()=> { 
    dispatch(fetchUsers())
    })
}
export const getUsers = (id: any) => (dispatch: Dispatch<Action>) => {
    axios.get(`https://6227174a2dfa52401813ed75.mockapi.io/users/${id}`)
        .then((data) => {
            console.log(data.data , "<<<<<<<<>>>>>>>>>>>>>" )
            dispatch({ type: ActionTypes.GET_USERS, payload: data.data })
        })
    }