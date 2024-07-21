import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link,useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
// import {isAuthenticated, logout, } from '../services/authService';
import authService from '../services/authService';
import {useSelector, useDispatch} from 'react-redux';
import { removeInfo } from '../redux/slice/slices';

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()
    const user = useSelector(state => state); 
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    console.log('infoo',user);
    useEffect(() => {
      if(user.userInfo.username){
        setIsAuthenticated(true);
      }
  }, [location.pathname]);

    // const isAuth = true;
    const changePath = (event , path)=>{
        event.preventDefault();
        if (location.pathname !== path)
            navigate(path);

    }


  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
    dispatch(removeInfo())
    navigate('/')

  }

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"  onClick={(e)=>{changePath(e,'/')}}>Social</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" onClick={(e)=>{changePath(e,'/')}}>Home</Nav.Link>
            <Nav.Link href="/people" onClick={(e)=>{changePath(e,'/people')}}>People</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            {!isAuthenticated &&
            <>
          <Nav.Link href="/signup"  onClick={(e)=>{changePath(e,'/signup')}}>Sign Up</Nav.Link>
          <Nav.Link href="/signin"  onClick={(e)=>{changePath(e,'/signin')}}>Sign In</Nav.Link>
          </>
            }
            {isAuthenticated && 
            <>
            {console.log('userrr',user)}
            <h3>Hello {user.userInfo?.firstName}</h3>
            <Button variant="secondary" onClick={handleLogout}>Logout</Button>
            </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <Outlet />
    </>
  );
}

export default NavBar;