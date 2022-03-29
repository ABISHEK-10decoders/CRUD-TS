import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom"

const Header = () => {
  return (
   
          <Navbar bg="dark" variant="dark">
      <Container>
      <Link to="/" className="navbar-brand ml-5"> <h2 className='text-white bg-dark px-5'> Redux React - CRUD<Badge bg="primary" className="px-4 py-1 mx-3">TS</Badge></h2> </Link>
       
      </Container>
  </Navbar>


  )
}

export default Header