
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Signup } from './Signup';
import { Login } from './Login';
import {ForgotPas} from "./ForgotPas";

function App() {


  return (
<div>
    <Routes>

<Route path="/Signup" element={<Signup></Signup>} ></Route>
<Route path="/ForgotPas" element={<ForgotPas></ForgotPas>}></Route>
<Route path="/"  element={<Login></Login>}></Route>

</Routes>




  </div>





  );
}

export default App;
