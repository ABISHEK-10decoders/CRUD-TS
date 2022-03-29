import { createStore , applyMiddleware } from "redux"
import combine from "./state/reducers/combine"
import thunk from "redux-thunk"
import logger from "redux-logger"

export const store = createStore( 
    combine ,{},
    applyMiddleware(thunk,logger),
)