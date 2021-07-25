/* eslint-disable no-restricted-imports */
import { SAMPLE_ACTION_TYPE } from '../_actions/types';

const initialState = {
  sampleData: [],
};

export default function sampleReducer(state = initialState, action) {
  switch (action.type) {
    case SAMPLE_ACTION_TYPE:
      return {
        ...state,
        sampleData: action.payload,
      };
    default:
      return state;
  }
}
