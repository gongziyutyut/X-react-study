export function thunk () {
  return next => action => {
    if (action instanceof Function) {
      action()
    } else {
      next(action)
    }
  }
}