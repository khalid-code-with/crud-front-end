
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Readuser from './Readuser';
import UpdateUser from './UpdateUser';
import { BrowserRouter,Router} from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
function App() {
  return (
    <div>
      <div className="container">
        <h1 className='text-center ' style={{ fontSize: "20px", color: "black", textDecoration: "underline", color: "green" }}>
          This page is created by Khalid Khan
        </h1>
      </div>
 
      <Routes>
       <Route path="*" element={<Register></Register>} />
      <Route path="/login" element={<Login></Login>} />
        <Route path="/home" element={<Home />} />
        <Route path="/Readuser/:id" element={<Readuser />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
      </Routes>
     
    </div>

  );
}

export default App;

