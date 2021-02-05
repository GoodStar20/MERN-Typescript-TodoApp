export type SystemState = {
  notes: any[];
};

export type TodoListProps = {
  viewNote(_id: string, title: string): any;
  editNote(_id: string, title: string): any;
  deleteNote(_id: string, title: string): any;
  newNote(): any;
  notes: TTodos[];
  uploadNotes(): any;
};

export type TTodos = {
  date: string;
  title: string;
  _id: string;
};
