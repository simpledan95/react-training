import './App.css';
import Todo from './Todo';
import { TodoProvider } from './TodoProvider';

function App() {

  return (
    <div className="App">
      <TodoProvider>
        <Todo/>
      </TodoProvider>
    </div>
  );
}

export default App;
