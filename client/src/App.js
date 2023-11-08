import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Jobs from './pages/Main';
import AddJob from './pages/AddJob';
import JobDescription from './pages/JobDescription';
import EditJob from './pages/EditJob';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Jobs />} />
          <Route path='/addjob' element={<AddJob />} />
          <Route path='/editjob/:id' element={<EditJob />} />
          <Route path='/jobdescription/:id' element={<JobDescription />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;