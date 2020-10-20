import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export class HomeView extends React.Component {
 constructor() {
  super();
 }

 render() {
  return (
   <div>
    <Card>
     <Button>
      <Link to={`/players`}>Players</Link>
     </Button>
     <Button>
      <Link to={`/teams`}>Teams</Link>
     </Button>
     <Button>
      <Link to={`/seasons`}>Seasons</Link>
     </Button>
     <Button>
      <Link to={`/playoffs`}>Playoffs</Link>
     </Button>
     <Button>
      <Link to={`/greatest/players`}>Greatest Players</Link>
     </Button>
     <Button>
      <Link to={`/greatest/teams`}>Greatest Teams</Link>
     </Button>
     <Button>
      <Link to={`/greatest/seasons`}>Greatest Seasons</Link>
     </Button>
     <Button>
      <Link to={`/about`}>About</Link>
     </Button>
    </Card>
   </div>
  )
 }
}
