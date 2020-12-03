import './styles.css'
import {createStore, applyMiddleware} from 'redux'
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

const store = createStore(rootReducer,applyMiddleware(thunk,logger))


addBtn.addEventListener('click', () => {
  store.dispatch(increment())
  
  })

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
  
})

store.subscribe(() => {
  const state = store.getState()
  console.log(state)
  counter.textContent = state.counter
  
}
  )

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncincrement())
})
themeBtn.addEventListener('click', () => {
   store.dispatch(changeTheme())
})
