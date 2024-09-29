import { STATUS_LOADABLE_CHANGED } from '../actionTypes';

export default (payload) => {
  return {
    type: STATUS_LOADABLE_CHANGED,
    payload
  }
}