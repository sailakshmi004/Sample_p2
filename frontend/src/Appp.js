import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './Appp.css';
import './response.css'
import { Aduser } from './components/aduser/aduser';
import { Welcome } from './components/welcome/welcome';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Update } from './components/update/update';
import { User } from './components/usercontent/usercontent';
import { Heading } from './components/head/head';
import { Registerr } from './components/registerr/registerr';
import { Ad } from './components/aduser/admin';
import { Problem } from './components/prblm/prblm';
import { Sorry } from './components/noaccess/noaccess';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

function Appp() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Welcome/>}/>
    <Route path='/aduser' element={<Aduser/>}/>
    <Route path='/admin' element={<Ad/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/registerp' element={<Register/>}/>
    <Route path='/forgotp' element={<Update/>}/>
    <Route path='/usercontent' element={<User/>}/>
    <Route path='/' element={<Heading/>}/>
    <Route path='/registerpp' element={<Registerr/>}/>
    <Route path='/prblm' element={<Problem/>}/>
    <Route path='/noaccess' element={<Sorry/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default Appp;
