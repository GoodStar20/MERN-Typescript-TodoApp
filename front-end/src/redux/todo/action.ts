import { deleteNotes, fetchNotes, postNotes, putNotes } from '../../api/api';
import { getNotes } from './reducer';

export const getTodos = () => async (dispatch: any) => {
  const payload = await fetchNotes();
  dispatch(getNotes(payload.data));
};
export const postTodo = (title: any) => async (dispatch: any) => {
  const payload = await postNotes(title);
  if (payload.status === 200) {
    dispatch(getTodos());
  }
};
export const putTodo = (id: string, title: string) => async (dispatch: any) => {
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
