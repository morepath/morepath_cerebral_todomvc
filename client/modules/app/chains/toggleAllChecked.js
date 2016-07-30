import putToggleAll from '../actions/putToggleAll'
import toggleAllChecked from '../actions/toggleAllChecked'
import notifyError from '../factories/notifyError'

export default [
  putToggleAll, {
    success: [toggleAllChecked],
    error: [notifyError('Could not toggle the checked Todos')]
  }
]
