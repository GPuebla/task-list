import logo from './logo.svg';
import './App.css';
import InputTask from './components/InputTask';
import ItemTask from './components/ItemTask';

function App() {
  return (
    <main>
        <h1>To Do List</h1>
        <InputTask/>
        <ItemTask/>
    </main>
  );
}

export default App;
