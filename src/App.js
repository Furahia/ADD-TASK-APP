import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import Questions from './components/Questions';
import Question from './components/Question';
import Profile from './components/Profile';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/questions" element={<Questions/>} />
        <Route path="/question/:id" element={<Question/>} />
        <Route path="/profile" element={<Profile/>} />
        
      </Routes>
      
    </div>
    </Provider>
  )
  
}


export default App;
