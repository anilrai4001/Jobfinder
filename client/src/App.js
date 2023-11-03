import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Jobs from './pages/Main';
import AddJob from './pages/AddJob';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/addjob' element={<AddJob />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;