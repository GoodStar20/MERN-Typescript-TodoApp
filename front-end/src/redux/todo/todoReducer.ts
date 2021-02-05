import { deleteNotes, fetchNotes, postNotes, putNotes } from '../../api/api';
import { SystemState } from '../../types/types';
// Const
const GET_NOTES = 'todo/GET_NOTES';
const ADD_NOTE = 'todo/ADD_NOTE';
const DELETE_NOTE = 'todo/DELETE_NOTE';

let initialState: SystemState = {
  notes: []
};

//Reducer
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
export const addNote = (title: any) => ({
  type: ADD_NOTE,
  newMessage: title
});
export const deleteNote = (title: any) => ({
  type: DELETE_NOTE,
  title
});
export const getTodos = () => async (dispatch: any) => {
  const payload = await fetchNotes();
  dispatch(getNotes(payload.data));
};
export const postTodos = (title: any) => async (dispatch: any) => {
  const payload = await postNotes(title);
  if (payload.status === 200) {
    dispatch(getTodos());
  }
};
export const putTodos = (id: string, title: string) => async (
  dispatch: any
) => {
  const payload = await putNotes(id, title);
  if (payload.status === 200) {
    dispatch(getTodos());
  }
};
export const deleteTodo = (id: string) => async (dispatch: any) => {
  const payload = await deleteNotes(id);
  if (payload.status === 200) {
    dispatch(getTodos());
  }
};

export default todoReducer;
