import { INCREMENT, DECREMENT, ASYNCINCREMENT, CHANGETHEME, DISABLE_BUTTONS, ENABLE_BUTTONS } from "./types"
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
    value: 'light',
    disabled: false
}

 function themeReducer(state = initialThemeState, action){
     switch(action.type){
         case CHANGETHEME:
             return {...state, value: action.payload}
             case ENABLE_BUTTONS:
                    return {...state, disabled: false} 
             case DISABLE_BUTTONS:
                return {...state, disabled: true} 
                
     }
     return state
    
}

export const rootReducer = combineReducers(
    {
        counter: counterReducer,
        theme: themeReducer
    }
)