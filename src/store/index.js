// import {createStore} from 'redux'
import {createStore, applyMiddleWare} from '../components/Xredux'
// import thunk from 'redux-thunk'
import {thunk} from '../../src/components/Xredux/thunk'
const defaultSate = {
  count: 0
}
export function reducer (state = defaultSate, action) {
  switch (action.type) {
    case 'ADD':
      const sum = state.count + 1
      return {...state, count: sum}
    case 'MINUS':
      const differ = state.count - 1
      return {...state, count: differ}
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleWare(thunk))

export default store