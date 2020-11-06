import React from 'react';
import '../styles/components/index.scss';
import '../styles/components/tables.scss';
import '../styles/components/about.scss';
import '../styles/components/buttons.scss';

export class AboutHeader extends React.Component {

 scrollToConcept = () => {
  const conceptElement = document.getElementById('concept');
  conceptElement.scrollIntoView(true);
 }
 scrollToScale = () => {
  const scaleElement = document.getElementById('scale');
  scaleElement.scrollIntoView(true);
 }
 scrollToMethodology = () => {
  const methodologyElement = document.getElementById('methodology');
  methodologyElement.scrollIntoView(true);
 }
 scrollToAdjustments = () => {
  const adjustmentsElement = document.getElementById('adjustments');
  adjustmentsElement.scrollIntoView(true);
 }
 scrollToExceptions = () => {
  const exceptionElement = document.getElementById('exceptions');
  exceptionElement.scrollIntoView(true);
 }
 scrollToGreatestPlayers = () => {
  const greatestPlayersElement = document.getElementById('greatest-players');
  greatestPlayersElement.scrollIntoView(true);
 }
 scrollToObservations = () => {
  const observationElement = document.getElementById('observations');
  observationElement.scrollIntoView(true);
 }
 scrollToDisclaimers = () => {
  const disclaimerElement = document.getElementById('disclaimer');
  disclaimerElement.scrollIntoView(true);
 }
 scrollToFinalThoughts = () => {
  const finalThoughtsElement = document.getElementById('final-thoughts');
  finalThoughtsElement.scrollIntoView(true);
 }

 render() {
  return (
   <section id="about-header">
    <h1>About</h1>
    <br />
    <h4>Contents</h4>
    <ol>
     <li><button className="contents-btn" onClick={this.scrollToConcept}>Concept</button></li>
     <li><button className="contents-btn" onClick={this.scrollToScale}>Scale</button></li>
     <li><button className="contents-btn" onClick={this.scrollToMethodology}>Methodology</button></li>
     <li><button className="contents-btn" onClick={this.scrollToAdjustments}>Adjustments</button></li>
     <li><button className="contents-btn" onClick={this.scrollToExceptions}>Exceptions</button></li>
     <li><button className="contents-btn" onClick={this.scrollToGreatestPlayers}>Greatest Players</button></li>
     <li><button className="contents-btn" onClick={this.scrollToObservations}>Observations</button></li>
     <li><button className="contents-btn" onClick={this.scrollToDisclaimers}>Disclaimers</button></li>
     <li><button className="contents-btn" onClick={this.scrollToFinalThoughts}>Final Thoughts</button></li>
    </ol>
   </section>
  )
 }
}