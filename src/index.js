import './styles.css'
import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { rootReducer } from './redux/rootReducer'
import { increment, decrement, asyncincrement, changeTheme } from './redux/actions'
const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

// function logger(state){
//   return function(next){
//     return function(action){
//       console.log('State:', state)
//       console.log('Action:',action)
//       return next(action)
//     }
//   }
// }


const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk,logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )
   


addBtn.addEventListener('click', () => {
  store.dispatch(increment())
  
  })

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
  
})


  

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncincrement())
})



themeBtn.addEventListener('click', () => {
 let newTheme = 'light'
  if (document.body.classList.contains('light')) {
    newTheme = 'dark'
  } else {
    newTheme = 'light'
  }
  document.body.className = newTheme
  console.log('newTheme',newTheme)
   store.dispatch(changeTheme(newTheme))
})
store.subscribe(() => {
  const state = store.getState()
  console.log(state)
  counter.textContent = state.counter;
  [addBtn,subBtn,themeBtn,asyncBtn].forEach( btn => {
    console.log('state',true)
    btn.disabled = state.theme.disabled
  } );
  
}
  )
  store.dispatch({type: 'INIT_APPLICATION'})
