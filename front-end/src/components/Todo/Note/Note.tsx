import { TodoListProps } from '../../../types/types';

export const Note: React.FC<TodoListProps> = props => {
  return (
    <ul className="list-group">
      {props.notes.map(note => {
        return (
          <li className="list-group-item note" id={note._id} key={note.title}>
            <span>{note.title}</span>
            <div>
              <button
                className="btn btn-outline-success mr-2"
                onClick={() =>
                  props.viewNote(note._id, note.title, note.createdAt)
                }>
                <i className="fas fa-eye" />
              </button>
              <button
                className="btn btn-outline-primary mr-2"
                onClick={() => props.editNote(note._id, note.title)}>
                <i className="fas fa-edit" />
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => props.deleteNote(note._id, note.title)}>
                <i className="fas fa-trash" />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
