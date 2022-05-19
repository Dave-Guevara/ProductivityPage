import './App.css';
import { Footer } from './components/common/footer/Footer';
import { Navbar } from './components/common/navbar/Navbar';
import { ToDoList } from './components/to-do/to-do-list/ToDoList';

function App() {
  return (
    <>
      <Navbar />
      <div id="mainContent" className='min-h-screen px-6 py-2'>
        <ToDoList />
      </div>
      <Footer />
    </>
  );
}

export default App;
