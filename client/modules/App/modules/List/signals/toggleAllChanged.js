import putToggleAll from '../actions/putToggleAll.js';
import toggleAllChecked from '../actions/toggleAllChecked.js';
import setPutError from '../actions/setPutError.js';

export default [
  putToggleAll, {
    success: [toggleAllChecked],
    error: [setPutError],
  },
];
