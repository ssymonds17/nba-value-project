import React from 'react';
// import { Link } from 'react-router-dom';
// import Table from 'react-bootstrap/Table';
import '../styles/components/index.scss';
import '../styles/components/tables.scss';

export default About = () => {

 function scrollToTop() {
  const headerElement = document.getElementById('header');
  headerElement.scrollIntoView(true);
 }
 return (
  <div>

   <button onClick={scrollToTop}><span>Top</span></button>
  </div>
 )
}