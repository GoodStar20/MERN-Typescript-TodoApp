export type SystemState = {
  notes: any[];
};

export type TodoListProps = {
  viewNote: (_id: string, title: string, createAt: string) => void;
  editNote: (_id: string, title: string) => void;
  deleteNote: (_id: string, title: string) => void;
  newNote(): any;
  notes: TTodos[];
  uploadNotes(): any;
};

export type TTodos = {
  _id: string;
  title: string;
  createdAt: string;
};

export type TodoModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
  state: string;
  todoValue: string;
  todoDate: string;
  updateNote: () => void;
  setTodoValue: (value: string) => void;
};
