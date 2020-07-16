
const createStore = (reducer, enhancer) => {
  if (enhancer) {
    return enhancer(createStore)(reducer)
  }
  let currentState
  let listeners = []

  function getState () {
    return currentState
  }

  function dispatch (action) {
    currentState = reducer(currentState, action)
    listeners.forEach(item => {
      item()
    })
  }

  function subscribe (callback) {
    listeners.push(callback)
    return () => {
      listeners = []
    }
  }
  dispatch({type: '213tr7gbsn'})

  return {
    getState,
    dispatch,
    subscribe,
  }
}

export default createStore