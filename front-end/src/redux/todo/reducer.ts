import { SystemState } from '../../types/types';

const GET_NOTES = 'todo/GET_NOTES';

let initialState: SystemState = {
  notes: []
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.notes
      };
    default:
      return state;
  }
};

export const getNotes = (notes: any) => ({
  type: GET_NOTES,
  notes
});

export default todoReducer;
