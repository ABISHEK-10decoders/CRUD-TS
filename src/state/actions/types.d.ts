import { ActionTypes} from "../../action-type/index"
export interface insital {
    id: string;
    email: string;
    phonenumber: string;
    name: string;
}
export type FetchUser = {
    id: string;
    email: string;
    phone: string;
    name: string;
}[]


export interface insitalState {
    users : insital[]
}

interface Fetch_User {
    type: ActionTypes.FETCH_USERS
    payload: insital 
}
interface Add_User {
    type: ActionTypes.ADD_USERS
    payload: insital
}
interface Delete_User {
    type: ActionTypes.DELETE_USERS
    payload: string
}
interface Update_User {
    type: ActionTypes.UPDATE_USERS
    payload: insital
}
interface Get_User{
    type: ActionTypes.GET_USERS
    payload: insital
}
export type Action = Fetch_User | Add_User | Delete_User | Update_User | Get_User
export type IS = insitalState