import {BrowserRouter,Route,Routes} from 'react-router-dom';

import ProtectionRouting from './utility/ProtectionRouting';
import ProtectHomeRoute from './utility/ProtctRoute/ProtectHomeRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StartupAdmin from './pages/StartupAdmin';
import AddCourse from './pages/AddCourse';


function App() {
 
  return (
   <>
   <BrowserRouter>
    <Routes>
     <Route element={<ProtectionRouting/>} >
      <Route path='/servies' element={<>here servise</>}>  </Route>
     
     </Route>

     <Route element={<ProtectHomeRoute/>} >
     <Route path='/' element={<Home/>}  > </Route>
     </Route>

     
     <Route path='/login'element={<Login/>}  > </Route>
     <Route path='/signup'element={<Signup/>}  > </Route>
     <Route path='/addcourse'element={<AddCourse/>}  > </Route>
  
     <Route path='/startup'element={<StartupAdmin/>}  > </Route>
     
    </Routes>
   
   
   </BrowserRouter>
   
   </>
  );
}

export default App;
