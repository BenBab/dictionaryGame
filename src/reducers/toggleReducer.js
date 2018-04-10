import { TOGGLE_MESSAGE } from '../actions/toggleAction';

const initialState = {
  messageVisibility: false,
};

export default function (state = initialState, action) {
  const { type } = action; // same as action.type
  debugger;
  switch (type) {
    case TOGGLE_MESSAGE:
      return {
        ...state,
        messageVisibility: !state.messageVisibility,
      };
    default:
      return state;
  }
}
