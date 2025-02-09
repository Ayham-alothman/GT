import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Dash from './pages/Dash';

import ProtectRoute from './utility/ProtectRoute';


function App() {
 return (
   <>
    <BrowserRouter>
    <Routes >

    <Route element={<ProtectRoute/>} > 
      <Route path='/' element={<Dash  />}></Route>  
    </Route>



 
           
     
     <Route path='/signin' element={<Login />}></Route>
    

   </Routes>
   </BrowserRouter>
     </>
   
   
   
 ); 
}

export default App;