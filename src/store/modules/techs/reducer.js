import producer from 'immer';

export const INITIALL_STATE = [];

export default function techs(state = INITIALL_STATE, action) {
  return producer(state, draft => {
    switch (action.type) {
      case 'ADD_TECH':
        draft.push(action.payload.tech);
        break;
      default:
    }
  });
}
