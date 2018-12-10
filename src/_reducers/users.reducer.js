import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_SUCCESS:
      return {
        items: action.user
      };
    default:
      return state
  }
}