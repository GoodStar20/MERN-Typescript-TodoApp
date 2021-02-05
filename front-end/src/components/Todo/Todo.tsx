import { useEffect } from 'react';
import { Button } from 'reactstrap';
import { Note } from './Note/Note';
import { TodoListProps } from '../../types/types';

export const Todo: React.FC<TodoListProps> = props => {
  useEffect(() => {
    props.uploadNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        <div className="text-right">
          <Button color="primary" onClick={props.newNote}>
            Add
          </Button>
        </div>
        <hr />
        <Note {...props} />
      </div>
    </div>
  );
};
