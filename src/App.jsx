import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./App.css";

function App() {
  return (
    <>
      {/* nav barre */}
      <Navbar expand="lg" style={{ backgroundColor: "beige)" }}>
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>Workshop React JS</h1>
      <img
        id="imgIndex"
        src="https://images.unsplash.com/photo-1789758612502-1ab95313594e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D"
        alt="paysage"
      />

      <p>
        The best way to consume React-Bootstrap is via the npm package. If you
        plan on customizing the Bootstrap Sass files, or don't want to use a CDN
        for the stylesheet, it may be helpful to install vanilla Bootstrap as
        well.
      </p>
    </>
  );
}

export default App;
