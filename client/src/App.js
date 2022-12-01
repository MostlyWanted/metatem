
import './App.css';

import Header from './components/Homepages/Header'
import Navbar from './components/Homepages/Navbar'
import About from './components/Homepages/About'
import Ourwork from './components/Homepages/Ourwork'
import Services from './components/Homepages/Services'
import Projects from './components/Homepages/Projects'
import Contact from './components/Homepages/Contact'
import Footer from './components/Homepages/Footer'
import Login from './components/Homepages/Login'
// admin component
import Admin from './components/adminComponents/Admin'
// edit components
import EditAbout from './components/editComponents/EditAbout'
import EditOurwork from './components/editComponents/EditOurwork'
import EditProjects from './components/editComponents/EditProjects'
import EditServices from './components/editComponents/EditServices'
import {Route, Routes } from 'react-router-dom'; 
import {Element} from 'react-scroll';


function App() {
  return (

    <div className='App'>
      <Navbar/>

      <Routes>
      
      <Route  path="/" element={<div>
      <Element className='Header'><Header/></Element>
      <Element className='Services'><Services/></Element>
      <Element className='Projects'><Projects/></Element>
      <Element className='About'><About/></Element>
      {/* <Element className='Ourwork'><Ourwork/></Element> */}
      {/* <Element className='Contact'><Contact/></Element> */}
      <Element className='Login'><Login/></Element>
      </div>}/>

     
   
     

      {/* <Route  path="/Login" element={<Login/>} />
      <Route  path="/Admin" element={<Admin/>} />
      <Route  path="/edit/:id" element={<EditAbout/>} />
      <Route  path="/EditOurwork/:id" element={<EditOurwork/>} />
      <Route  path="/EditProject/:id" element={<EditProjects/>} />
      <Route  path="/EditServices:id" element={<EditServices/>}/>
      <Route  path="/EditAbout" element={<EditAbout/>}/> */}
      </Routes>
     <Footer/>
    </div>

  );
}

export default App;
 