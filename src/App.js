// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import TodoListHomePage from './components/TodoListHomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <div className='container primary-container' style={{ "height": "500px" }}>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/todo' element={<TodoListHomePage/>}/>
      </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
