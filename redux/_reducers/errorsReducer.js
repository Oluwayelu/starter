/* eslint-disable no-restricted-imports */
import { GET_ERRORS, CLEAR_ERRORS } from '../_actions/types';

const initialState = {};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: {},
      };
    default:
      return state;
  }
}
