import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.scss';

export class NavBar extends React.Component {

 resetNavbar = () => {
  document.getElementById('menu-toggle').click();
 }

 render() {
  return (
   <Container className="navbar-container">
    <div>
     <Navbar className="navbar" fixed="top">
      <Link to={`/`}><Button className="nav-btn logo-btn"><img src="https://cdn.clipart.email/fbbefc42d83b2977aa6f058688e4a1a3_basketball-silhouette-free-vector-silhouettes_792-800.svg" alt="Basketball Clipart Outline" className="logo" /></Button></Link>
      <Link to={`/players`}><Button className="nav-btn">Players</Button></Link>
      <Link to={`/teams`}><Button className="nav-btn">Teams</Button></Link>
      <Link to={`/seasons`}><Button className="nav-btn">Seasons</Button></Link>
      <Link to={`/rankings/players`}><Button className="nav-btn">Greatest Players</Button></Link>
      <Link to={`/rankings/teams`}><Button className="nav-btn">Greatest Teams</Button></Link>
      <Link to={`/rankings/seasons/overall`}><Button className="nav-btn">Greatest Seasons</Button></Link>
      <Link to={`/about`}><Button className="nav-btn">About</Button></Link>
     </Navbar>
     <nav>
      <Link to={`/`}><Button className="home-brand" onClick={this.resetNavbar}>NBA Value Reference</Button></Link>
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">|||</label>
      <div className="nav-links">
       <Link to={`/players`}><Button className="nav-btn-drop" onClick={this.resetNavbar}>Players</Button></Link>
       <Link to={`/teams`}><Button className="nav-btn-drop" onClick={this.resetNavbar}>Teams</Button></Link>
       <Link to={`/seasons`}><Button className="nav-btn-drop" onClick={this.resetNavbar}>Seasons</Button></Link>
       <Link to={`/rankings/players`}><Button className="nav-btn-drop" onClick={this.resetNavbar}>Greatest Players</Button></Link>
       <Link to={`/rankings/teams`}><Button className="nav-btn-drop" onClick={this.resetNavbar}>Greatest Teams</Button></Link>
       <Link to={`/rankings/seasons/overall`}><Button className="nav-btn-drop" onClick={this.resetNavbar}>Greatest Seasons</Button></Link>
       <Link to={`/about`}><Button className="nav-btn-drop" onClick={this.resetNavbar}>About</Button></Link>
      </div>
     </nav>
    </div>
   </Container>
  )
 }
}
