import React from 'react';
// import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import '../styles/components/index.scss';
import '../styles/components/tables.scss';
import { AboutHeader } from './about-header';
import { AboutConcepts } from './about-concepts';
import { AboutScale } from './about-scale';
import { AboutMethodology } from './about-methodology';
import { AboutAdjustments } from './about-adjustments';
import { AboutExceptions } from './about-exceptions';
import { AboutGreatestPlayers } from './about-greatest-players';
import { AboutObservations } from './about-observations';
import { AboutDisclaimers } from './about-disclaimers';
import { AboutFinalThoughts } from './about-final-thoughts';

export class AboutView extends React.Component {

 render() {
  return (
   <div>
    <AboutHeader />
    <br />
    <AboutConcepts />
    <br />
    <AboutScale />
    <br />
    <AboutMethodology />
    <br />
    <AboutAdjustments />
    <br />
    <AboutExceptions />
    <br />
    <AboutGreatestPlayers />
    <br />
    <AboutObservations />
    <br />
    <AboutDisclaimers />
    <br />
    <AboutFinalThoughts />
   </div>
  )
 }
}
{/* <button onClick={scrollToTop}><span>Top</span></button> */ }
