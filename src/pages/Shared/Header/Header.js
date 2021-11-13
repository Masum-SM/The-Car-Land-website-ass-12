import React from "react";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logout, admin } = useAuth();
  // console.log(user);
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="header"
      >
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <img
              className="header-logo"
              src="https://i.ibb.co/m0ctdQp/l.png"
              alt=""
            />{" "}
            The Car <span>Land</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto ">
              <Nav.Link as={HashLink} to="/home" className="nav-anchor">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/cars#cars" className="nav-anchor">
                Cars
              </Nav.Link>

              <Nav.Link as={HashLink} to="/explore" className="nav-anchor">
                Explore
              </Nav.Link>
              {/* <Nav.Link as={HashLink} to="/dashboard" className="nav-anchor">
                Dashboard
              </Nav.Link> */}

              {user?.email ? (
                <NavDropdown title="Dashboard" id="navbarScrollingDropdown">
                  <div className="drop-body">
                    {!admin && (
                      <div>
                        <NavDropdown.Item
                          as={HashLink}
                          to="/pay"
                          className="nav-anchor drop-item"
                        >
                          Pay
                        </NavDropdown.Item>

                        <NavDropdown.Item
                          as={HashLink}
                          to="/order"
                          className="nav-anchor drop-item"
                        >
                          My Orders
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={HashLink}
                          to="/review"
                          className="nav-anchor drop-item"
                        >
                          Review
                        </NavDropdown.Item>
                      </div>
                    )}

                    {admin && (
                      <div>
                        <NavDropdown.Item
                          as={HashLink}
                          to="/makeadmin"
                          className="nav-anchor drop-item"
                        >
                          Make Admin
                        </NavDropdown.Item>

                        <NavDropdown.Item
                          as={HashLink}
                          to="/manageorder"
                          className="nav-anchor drop-item"
                        >
                          Manage All Orders
                        </NavDropdown.Item>

                        <NavDropdown.Item
                          as={HashLink}
                          to="/managecars"
                          className="nav-anchor drop-item"
                        >
                          Manage Cars
                        </NavDropdown.Item>

                        <NavDropdown.Item
                          as={HashLink}
                          to="/addcar"
                          className="nav-anchor drop-item"
                        >
                          Add A New Car
                        </NavDropdown.Item>
                      </div>
                    )}
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="dropsdown">
                      <Nav.Link as={Link} to="/login">
                        {" "}
                        <button className="log-icon" onClick={logout}>
                          <i className="fas fa-external-link-square-alt"></i>{" "}
                          Log Out
                        </button>
                        <br />{" "}
                        <Navbar.Text className="signed-user text-warning">
                          User:{user?.displayName}
                        </Navbar.Text>{" "}
                      </Nav.Link>
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>
              ) : (
                <Nav.Link as={HashLink} className="log-icon" to="/login">
                  <i className="fas fa-sign-in-alt"> Login</i>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
