import {INCREMENT, DECREMENT, ASYNCINCREMENT, CHANGETHEME, ENABLE_BUTTONS, DISABLE_BUTTONS} from './types'
export function increment(){
    return {
        type:INCREMENT
    }
}
export function enableButtons(){
    return {
        type:ENABLE_BUTTONS
    }
}
export function disableButtons(){
    return {
        type:DISABLE_BUTTONS
    }
}
export function decrement(){
    return {
        type: DECREMENT
    }
}
export function asyncincrement(){
    return function(dispatch){
        dispatch(disableButtons())
        setTimeout(() => {
            //document.querySelector('#add').disabled = false
            dispatch(increment())
            dispatch(enableButtons())
            
        }, 2000);
        //document.querySelector('#add').disabled = true
        
    }
}
export function changeTheme(newTheme){
    return {
        type: CHANGETHEME,
        payload: newTheme
      
    }
}