import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { TodoModalProps } from '../../types/types';

export const TodoModal: React.FC<TodoModalProps> = props => {
  const {
    isOpen,
    toggleModal,
    state,
    todoValue,
    todoDate,
    updateNote,
    setTodoValue
  } = props;
  return (
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
          <div className="form-group">
            <label htmlFor="todoValue">Title</label>
            {state === 'view' ? (
              <>
                <h4 id="todoValue">{todoValue}</h4>
                <label htmlFor="todoDate">Created Date</label>
                <h4 id="todoValue">{todoDate}</h4>
              </>
            ) : (
              <input
                type="text"
                id="todoValue"
                className="form-control"
                placeholder="Write Something"
                value={todoValue}
                onChange={e => setTodoValue(e.target.value)}
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
  );
};
