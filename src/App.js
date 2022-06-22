import './App.css';
import Header from './components/Header'
import TodoList from './components/TodoList';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="task-wrapper boxi">
        <h2>Mis tareas 📝</h2>
        <TodoList />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
