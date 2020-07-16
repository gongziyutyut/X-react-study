import React, {useContext, useLayoutEffect, useReducer} from 'react';

const ReactContext = React.createContext()

export const connect = (
  mapStateToProps = state => state,
  mapDispatchToProps
) => WrappedComponent => props => {
  const store = useContext(ReactContext)
  const {getState, dispatch, subscribe} = store
  const stateProps = mapStateToProps(getState())
  let dispatchProps = {dispatch}

  const [ignore, forceUpdate] = useReducer(x => x + 1, 0)
  if (typeof dispatchProps === 'function') {
    dispatchProps = mapDispatchToProps(dispatch)
  } else if (typeof dispatchProps === 'object') {
    dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
  } else {
    const err = {
      message: '你格式错了'
    }
    throw(err)
  }

  useLayoutEffect(() => {
    const unSubscribe = subscribe (() => {
      forceUpdate()
    })

    return () => {
      if (unSubscribe) {
        unSubscribe()
      }
    }
  })

  return <WrappedComponent {...props} {...stateProps} {...dispatchProps}></WrappedComponent>
}

export const Provider = ({store, children}) => {
  return (
    <ReactContext.Provider value={store}>
      {children}
    </ReactContext.Provider>
  )
}

export const useSelector = (selector) => {
  const store = useContext(ReactContext)
  const {getState, subscribe} = store
  const selectedData = selector(getState())
  const [ignore, forceUpdate] = useReducer(x => x + 1, 0)
  useLayoutEffect(() => {
    const unSubscribe = subscribe (() => {
      forceUpdate()
    })

    return () => {
      if (unSubscribe) {
        unSubscribe()
      }
    }
  }, [store, subscribe])
  return selectedData
}

export const useDispatch = () => {
  const store = useContext(ReactContext)
  return store.dispatch
}


function bindActionCreator (creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}

function bindActionCreators (creators, dispatch) {
  let obj = {}
  for (let key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }
  return obj
}