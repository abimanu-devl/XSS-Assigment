import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import User from './components/users';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/users' element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
