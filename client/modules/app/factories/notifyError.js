function notifyError (errorMessage) {
  function action ({state}) {
    state.set('app.error', errorMessage)
  }

  action.displayName = 'notifyError'

  return action
}

export default notifyError
