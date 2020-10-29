import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.scss';

export class NavBar extends React.Component {

 render() {
  return (
   <Container className="navbar-container">
    <div>
     <Navbar className="navbar" fixed="top">
      <Link to={`/`}><Button className="nav-btn">Home</Button></Link>
      <Link to={`/players`}><Button className="nav-btn">Players</Button></Link>
      <Link to={`/teams`}><Button className="nav-btn">Teams</Button></Link>
      <Link to={`/seasons`}><Button className="nav-btn">Seasons</Button></Link>
      <Link to={`/rankings/players`}><Button className="nav-btn">Greatest Players</Button></Link>
      <Link to={`/rankings/teams`}><Button className="nav-btn">Greatest Teams</Button></Link>
      <Link to={`/rankings/seasons/overall`}><Button className="nav-btn">Greatest Seasons</Button></Link>
      <Link to={`/about`}><Button className="nav-btn">About</Button></Link>
     </Navbar>
    </div>
   </Container>
  )
 }
}
