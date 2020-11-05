import React from 'react';
import '../styles/components/index.scss';
import '../styles/components/tables.scss';

export class AboutScale extends React.Component {

 render() {
  return (
   <section id="scale">
    <h2>2. The Scale</h2>
    <br />
    <h4>Regular Season</h4>
    <ul style={{ display: 'block', listStyleType: 'initial' }}>
     <li><strong>50+</strong> Outstanding MVP</li>
     <li><strong>40-50</strong> Solid MVP</li>
     <li><strong>30-40</strong> Weak MVP/Strong MVP Candidate</li>
     <li><strong>20-30</strong> All-NBA</li>
     <li><strong>10-20</strong> All-Star</li>
     <li><strong>5-10</strong> Solid Starter</li>
     <li><strong>0-5</strong> Fringe Starter or Bench Player</li>
     <li><strong>0</strong> Replacement Level or Below</li>
    </ul>
    <h4>Playoffs</h4>
    <ul style={{ display: 'block', listStyleType: 'initial' }}>
     <li><strong>60+</strong> Best Player On A Champion</li>
     <li><strong>30-60</strong> Second Best Player On A Champion/Best Player On Runner-Up</li>
     <li><strong>20-30</strong> Significant Contributor On A Champion/Best Player On A Conference Finalist</li>
     <li><strong>10-20</strong> Solid Starter On A Champion/Significant Contribution To A Non-Champion</li>
     <li><strong>0-10</strong> Role Player On A Champion/Starter On A Non-Champion</li>
     <li><strong>0</strong> Replacement Level or Below</li>
    </ul>
    <p>
     The upper tier scores for the playoffs exceed those for the regular season due to the fact that succeeding in the playoffs is more important. Being the best player on a championship squad is more prestigious than being the best player on a 60+ win team.
     </p>
   </section>
  )
 }
}