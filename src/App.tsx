import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../src/Compounds/Header"
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import  HomePage  from './Compounds/HomePage';
import AddPage from './Compounds/AddPage';
import EditPage from './Compounds/EditPage';

function App() {
  return (
    <BrowserRouter> 
    <Header/>
    <Routes> 
    <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
