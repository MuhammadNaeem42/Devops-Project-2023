import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useSendLogoutMutation } from "../slices/userApiSlice";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [sendLogout] = useSendLogoutMutation();

  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      sendLogout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const renderNavigation = () => {
    if (userInfo) {
      return (
        <>
          <LinkContainer to='/dashboard'>
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <NavDropdown title={userInfo.name} id='username'>
            <LinkContainer to='/profile'>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        </>
      );
    } else {
      return (
        <>
          <LinkContainer to='/login'>
            <Nav.Link>
              <FaSignInAlt /> Sign In
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to='/register'>
            <Nav.Link>
              <FaSignOutAlt /> Sign Up
            </Nav.Link>
          </LinkContainer>
        </>
      );
    }
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>MERN Auth</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>{renderNavigation()}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
