import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTodo,
  getTodos,
  postTodo,
  putTodo
} from '../../redux/todo/action';
import { Todo } from './Todo';
import { TodoModal } from './TodoModal';

export const TodoContainer: React.FC = () => {
  const { notes } = useSelector((state: any) => state.todoList);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState('');
  const [todoValue, setTodoValue] = useState('');
  const [todoDate, setTodoDate] = useState('');
  const [todoId, setTodoId] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const uploadNotes = () => {
    dispatch(getTodos());
  };
  const newNote = () => {
    setTodoId('');
    setState('add');
    setTodoValue('');
    toggleModal();
  };

  const viewNote = (id: string, title: string, createdAt: string) => {
    setTodoId('');
    setTodoValue(title);
    setState('view');
    setTodoDate(formatDate(createdAt));
    toggleModal();
  };

  const editNote = (id: string, title: string) => {
    setTodoId(id);
    setTodoValue(title);
    setState('edit');
    toggleModal();
  };

  const deleteNote = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const updateNote = () => {
    if (todoValue !== '') {
      if (todoId === '') {
        dispatch(postTodo(todoValue));
      } else {
        dispatch(putTodo(todoId, todoValue));
      }
    }
    toggleModal();
  };

  const formatDate = (date: string) => {
    const changeDate = new Date(date);
    const year = changeDate.getFullYear();
    const month = '0' + (changeDate.getMonth() + 1).toString().slice(-2);
    const day = '0' + changeDate.getDate().toString().slice(-2);
    let formattedDate = year + '-' + month + '-' + day;
    return formattedDate;
  };

  return (
    <div>
      <Todo
        notes={notes}
        newNote={newNote}
        uploadNotes={uploadNotes}
        viewNote={viewNote}
        editNote={editNote}
        deleteNote={deleteNote}
      />
      <TodoModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        state={state}
        updateNote={updateNote}
        setTodoValue={setTodoValue}
        todoValue={todoValue}
        todoDate={todoDate}
      />
    </div>
  );
};
