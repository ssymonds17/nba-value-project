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
      <Link to={`/rankings/players`}>All Time Players</Link>
     </Button>
     <Button>
      <Link to={`/rankings/teams`}>All Time Teams</Link>
     </Button>
     <Button>
      <Link to={`/rankings/seasons/overall`}>Greatest Seasons</Link>
     </Button>
     <Button>
      <Link to={`/about`}>About</Link>
     </Button>
    </Card>
   </div>
  )
 }
}
