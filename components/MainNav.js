import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { useRouter } from "next/router";


export default function MainNav() {
  // search field items
  const [searchField, setSearchField] = useState("");

  //router
  const router = useRouter();

  function handleSubmit(event) {
    //WIP
  }

    return <>
    <Navbar expand="lg" className="bg-primary d-flex">
        <Container fluid>
          <Container>
            <Navbar.Brand href="#">
              <img
                src="https://i.ibb.co/3YNkRFZZ/chop-suey.png"
                width="80"
                height="80"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
              <Form inline onSubmit={handleSubmit} className="d-flex w-100">
                <input
                  class="form-control form-control-skinbook "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{
                    maxHeight: "100px",
                    "border-radius": "0 !important",
                  }}
                  className="flex-grow-1"
                  onChange={(e) => setSearchField(e.target.value)}
                />
                <Button
                  style={{ "border-radius": "0 !important", border: "none"}}
                  class="w-50"
                  type="submit"
                >
                  <i class="bi bi-search"></i>
                </Button>
              </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar></>
}