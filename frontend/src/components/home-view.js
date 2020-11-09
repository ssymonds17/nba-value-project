import React from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/components/index.scss';
import '../styles/components/home-view.scss';

export class HomeView extends React.Component {

 render() {
  return (
   <Container>
    <div className="home-header">
     <h1>NBA VALUE REFERENCE</h1>
     <h3>An alternative method in historical player evaluation</h3>
    </div>
   </Container>
  )
 }
}
