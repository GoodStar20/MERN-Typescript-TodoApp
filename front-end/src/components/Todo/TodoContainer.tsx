import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  deleteTodo,
  getTodos,
  postTodos,
  putTodos
} from '../../redux/todo/todoReducer';
import { Todo } from './Todo';

export const TodoContainer: React.FC = () => {
  const notes = useSelector((state: any) => state.todoList.notes);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState('');
  const [listValue, setListValue] = useState('');
  const [listId, setListId] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const uploadNotes = () => {
    dispatch(getTodos());
  };
  const newNote = () => {
    setState('add');
    setListValue('');
    toggleModal();
  };
  const viewNote = (id: string, title: string) => {
    setListId('');
    setListValue(title);
    setState('view');
    toggleModal();
  };
  const editNote = (id: string, title: string) => {
    setListId(id);
    setListValue(title);
    setState('edit');

    toggleModal();
  };
  const deleteNote = (id: string) => {
    dispatch(deleteTodo(id));
  };
  const updateNote = () => {
    if (listValue !== '') {
      if (listId === '') {
        dispatch(postTodos(listValue));
      } else {
        dispatch(putTodos(listId, listValue));
      }
    }
    toggleModal();
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
      <Modal
        isOpen={isOpen}
        toggle={toggleModal}
        className="modal-dialog modal-dialog-centered modal-dialog-zoom">
        <ModalHeader toggle={toggleModal}>
          {state === 'view' && (
            <>
              <i className="fas fa-eye mr-2" /> View List
            </>
          )}
          {state === 'edit' && (
            <>
              <i className="fas fa-edit mr-2" /> Edit List
            </>
          )}
          {state === 'add' && (
            <>
              <i className="fas fa-pen mr-2" /> Add List
            </>
          )}
        </ModalHeader>
        <ModalBody>
          <div className="contact">
            <div className="input-group">
              {state === 'view' ? (
                <h3>{listValue}</h3>
              ) : (
                <input
                  type="text"
                  name="label"
                  className="form-control"
                  placeholder="Write Something"
                  value={listValue}
                  onChange={e => setListValue(e.target.value)}
                />
              )}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          {state === 'edit' && (
            <Button color="primary" onClick={updateNote}>
              Edit
            </Button>
          )}
          {state === 'add' && (
            <Button color="primary" onClick={updateNote}>
              Add
            </Button>
          )}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
