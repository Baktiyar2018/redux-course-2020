import { INCREMENT, DECREMENT, ASYNCINCREMENT, CHANGETHEME } from "./types"
import { combineReducers } from "redux"

 function counterReducer(state = 0, action){

    if(action.type === INCREMENT){
        return state + 1
    }else if(action.type === DECREMENT){
        return state -1
    }else if(action.type === ASYNCINCREMENT)

        return state + 1
  
    return state
}
const initialThemeState = {
    value: 'light'
}

 function themeReducer(state = initialThemeState, action){
     switch(action.type){
         case CHANGETHEME:
             return {...state, value: 'dark'}
     }
    
}

export const rootReducer = combineReducers(
    {
        counter: counterReducer,
        theme: themeReducer
    }
)