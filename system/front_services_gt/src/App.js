import {BrowserRouter,Route,Routes} from 'react-router-dom';

import ProtectionRouting from './utility/ProtectionRouting';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';



function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
     <Route element={<ProtectionRouting/>} >
      <Route path='/servies' element={<>here servise</>}>  </Route>
     
     </Route>

     <Route path='/' element={<Home/>}  > </Route>
     <Route path='/login'element={<Login/>}  > </Route>
     <Route path='/signup'element={<Signup/>}  > </Route>
    </Routes>
   
   
   </BrowserRouter>
   
   </>
  );
}

export default App;
