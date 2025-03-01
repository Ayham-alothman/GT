import {BrowserRouter,Route,Routes} from 'react-router-dom';

import ProtectionRouting from './utility/ProtectionRouting';
import ProtectHomeRoute from './utility/ProtctRoute/ProtectHomeRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StartupAdmin from './pages/StartupAdmin';
import AddCourse from './pages/AddCourse';
import Semster from './pages/Semster';

import Coordition from './pages/Coordition';
import Teacher from './pages/Teacher';
import AddDepart from './pages/AddDepart';
import AddClass from './pages/AddClass';

import ViewCourse from './pages/ViewCourse';
import ViewTeacher from './pages/ViewTeacher';
import ViewCord from './pages/ViewCord';
import ViewDepart from './pages/ViewDepart';

import Download from './pages/Download';
import ShowTable from './pages/ShowTable';


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
     <Route path='/addcourse'element={<AddCourse/>}  > </Route>
     <Route path='/cord'element={<Coordition/>}  > </Route>
     <Route path='/teacher'element={<Teacher/>}  > </Route>

     <Route path='/viewcourse'element={<ViewCourse/>}  > </Route>
     <Route path='/viewteacher'element={<ViewTeacher/>}  > </Route>
     <Route path='/viewcord'element={<ViewCord/>}  > </Route>
     <Route path='/viewdepart'element={<ViewDepart/>}  > </Route>

     <Route path='/semster' element={<Semster/>}  > </Route>

     <Route path='/department' element={<AddDepart/>}  > </Route>
     <Route path='/class' element={<AddClass/>}  > </Route>
  
     
     
     </Route>

     <Route path='/startup'element={<StartupAdmin/>}  > </Route>

     <Route path='/login'element={<Login/>}  > </Route>

     <Route path='/download'element={<Download/>}  > </Route>
     <Route path='/showtable'element={<ShowTable/>}  > </Route>
     
     
     
    </Routes>
   
   
   </BrowserRouter>
   
   </>
  );
}

export default App;
