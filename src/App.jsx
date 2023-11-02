import './App.css'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from './pages/Register'
import LivingPage from "./pages/LivingPage";
import Demo from './pages/demo/Demo';

export default function App() {
  return (
     <Router>

      <Routes>
        <Route path="/" exact element={<Login/>}/>
        <Route path="/register" exact element={<Register/>}/>
        <Route path="/Home" exact element={<Home/>}/>
        <Route path="/dinning" exact element={<LivingPage/>}/>
<Route path='/demo' exact element={<Demo/>}/>
      </Routes>
     </Router>
    
 
    
  )
}