import React from 'react';
import { TodoContainer } from './components/Todo/TodoContainer';

const App: React.FC = () => {
  return (
    <div className="App container">
      <h1 className="text-center mb-3">Todo List</h1>
      <TodoContainer />
    </div>
  );
};

export default App;
