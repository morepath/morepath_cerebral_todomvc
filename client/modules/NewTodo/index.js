import submitted from './signals/submitted'
import titleChanged from './signals/titleChanged'

export default () => {
  return (module) => {
    module.addState({
      title: '',
      isSaving: false
    })

    module.addSignals({
      titleChanged,
      submitted
    })
  }
}
