import React from 'react'

import {Navbar,Nav} from 'react-bootstrap'
function NavBar(props) {
    function handleClick(e) {
        e.preventDefault();
        alert('Hello From the Matrix: '+e.target.innerHTML)
        window.location.href = e.target.href
      }
    const {ourUsers} = props
    return (
        <div> 
             <Navbar bg="primary" variant="dark">
                <div className="container-fluid">
                    <Navbar.Brand href="#home">Our Class</Navbar.Brand>
                    <Nav className="me-auto">
                        {ourUsers.map((ele,i) => 
                            <Nav.Link href={"#"+ele.firstName} onClick={handleClick}>{ele.lastName} {ele.firstName}</Nav.Link>
                         )}
                    </Nav>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar
