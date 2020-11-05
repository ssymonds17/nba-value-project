import React from 'react';
import '../styles/components/index.scss';
import '../styles/components/tables.scss';
import '../styles/components/about.scss';

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
     <li><a className="content-scroll" onClick={this.scrollToConcept}>Concept</a></li>
     <li><a className="content-scroll" onClick={this.scrollToScale}>Scale</a></li>
     <li><a className="content-scroll" onClick={this.scrollToMethodology}>Methodology</a></li>
     <li><a className="content-scroll" onClick={this.scrollToAdjustments}>Adjustments</a></li>
     <li><a className="content-scroll" onClick={this.scrollToExceptions}>Exceptions</a></li>
     <li><a className="content-scroll" onClick={this.scrollToGreatestPlayers}>Greatest Players</a></li>
     <li><a className="content-scroll" onClick={this.scrollToObservations}>Observations</a></li>
     <li><a className="content-scroll" onClick={this.scrollToDisclaimers}>Disclaimers</a></li>
     <li><a className="content-scroll" onClick={this.scrollToFinalThoughts}>Final Thoughts</a></li>
    </ol>
   </section>
  )
 }
}