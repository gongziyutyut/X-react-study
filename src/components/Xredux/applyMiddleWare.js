const applyMiddleware = (...middlewares) => {
  return createStore => reducer => {
    const store = createStore(reducer)
    let {dispatch} = store
    let miAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    }
    let middlareChain = middlewares.map(middleWare => middleWare(miAPI))
    dispatch = compose(...middlareChain)(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
}

function compose (...fns) {
  return fns.reduce((a, b) => (...args) => a(b(...args)))
}



export default applyMiddleware 