/* eslint-disable no-restricted-imports */
import { GET_USER, CLEAR_USER } from '../_actions/types';

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
}
