import React from 'react'
import logo from '../images/logo/logo.svg'
import {Nav,Navbar} from 'react-bootstrap'
import {useEffect,useState} from 'react'

function Header(){
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY>= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, [changeNavbarColor]);
    return (
      <Navbar  expand="lg" style={{backgroundColor: colorChange ? '#a37d24' : 'transparent'}} fixed='top'>
      <Navbar.Brand href="/"><img src={logo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/" className='nav-item'>Home</Nav.Link>
          <Nav.Link href="/About" className='nav-item'>About</Nav.Link>
          <Nav.Link href="/Shop" className='nav-item'>Shop</Nav.Link>
          <Nav.Link href="/Services" className='nav-item'>Services</Nav.Link>
          <Nav.Link href="/Contact" className='nav-item'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        
    )
}
export default Header