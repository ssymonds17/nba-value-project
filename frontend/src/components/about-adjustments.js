import React from 'react';
import '../styles/components/index.scss';
import '../styles/components/tables.scss';
import Table from 'react-bootstrap/Table';

export class AboutAdjustments extends React.Component {

 render() {
  return (
   <section id="adjustments">
    <h2>4. Adjustments</h2>
    <br />
    <p id="negative-vorp">
     <strong>Rounding negative VORP values to 0</strong>: The reason for this is two-fold. Firstly, the idea behind this exercise is to reward players for positively contributing to their team’s success, not penalise sub-replacement players who probably should have been benched. Secondly, by allowing negative values, there were rare occurrences where a player’s proportional value exceeded 100%, which frankly, broke the system.
   </p>
    <p id="regular-win-total">
     <strong>Determining team’s regular season win total</strong>: As has been discussed elsewhere, there is not a linear path of difficulty as a team increases its win total. For example it is much harder to take a team from 30 wins to 40 wins or from 40 wins to 50 wins then it is to take a 65 win team to 70+ wins. Each subsequent win is exponentially harder to achieve. To reflect this, within the metric, each win above .500 receives additional credit, almost like compound interest. Therefore, for example, a team that wins 70 games will have a “win total” that is higher than 70.
   </p>
    <p>
     The table below gives an abbreviated view on how this works in action.
   </p>
    <br />
    <div className="table-container" style={{ height: '470px' }}>
     <Table bordered responsive>
      <thead>
       <th>Team Wins</th>
       <th>Adjusted Wins</th>
      </thead>
      <tbody>
       <tr>
        <td>73</td>
        <td>101</td>
       </tr>
       <tr>
        <td>70</td>
        <td>95</td>
       </tr>
       <tr>
        <td>65</td>
        <td>84</td>
       </tr>
       <tr>
        <td>60</td>
        <td>74</td>
       </tr>
       <tr>
        <td>55</td>
        <td>64</td>
       </tr>
       <tr>
        <td>50</td>
        <td>55</td>
       </tr>
       <tr>
        <td>45</td>
        <td>47</td>
       </tr>
       <tr>
        <td>40</td>
        <td>40</td>
       </tr>
       <tr>
        <td>35</td>
        <td>32</td>
       </tr>
       <tr>
        <td>30</td>
        <td>26</td>
       </tr>
       <tr>
        <td>25</td>
        <td>20</td>
       </tr>
       <tr>
        <td>20</td>
        <td>15</td>
       </tr>
       <tr>
        <td>15</td>
        <td>10</td>
       </tr>
       <tr>
        <td>10</td>
        <td>6</td>
       </tr>
       <tr>
        <td>5</td>
        <td>3</td>
       </tr>
      </tbody>
     </Table>
    </div>
    <p id="playoff-win-total-rounds">
     <strong>Playoff win total (Step A - Playoff Round</strong>: Each series win equates to 20 wins, and each victory in a losing series equates to an additional 5 wins. 5 wins are awarded for each loss in a series so that a team that loses a 7 game series receives more credit than a team that was swept in their series. If a team is swept in the first round they are awarded a nominal win count of 2. The Finals winner is awarded 90 wins. While the values awarded are somewhat arbitrary, they were in my view the equivalent of their regular season counterpart.
   </p>
    <p>
     The table below shows how rounds correspond to wins. 'Round' is how far the team progressed. 'Losing Wins' is how many wins a team managed in the series they eventually lost in. Teams that are swept in the first round are awarded a nominal win count of 2 wins.
   </p>
    <br />
    <div className="table-container" style={{ height: '310px' }}>
     <Table bordered responsive>
      <thead>
       <th>Round</th>
       <th>Losing Wins</th>
       <th>Win Total</th>
      </thead>
      <tbody>
       <tr>
        <td>Won Finals</td>
        <td>N/A</td>
        <td>90</td>
       </tr>
       <tr>
        <td>Lost Finals</td>
        <td>3</td>
        <td>75</td>
       </tr>
       <tr>
        <td>Finals Loser</td>
        <td>0</td>
        <td>60</td>
       </tr>
       <tr>
        <td>Conference Finals</td>
        <td>3</td>
        <td>55</td>
       </tr>
       <tr>
        <td>Conference Finals</td>
        <td>0</td>
        <td>40</td>
       </tr>
       <tr>
        <td>Second Round</td>
        <td>3</td>
        <td>35</td>
       </tr>
       <tr>
        <td>Second Round</td>
        <td>0</td>
        <td>20</td>
       </tr>
       <tr>
        <td>First Found</td>
        <td>3</td>
        <td>15</td>
       </tr>
       <tr>
        <td>First Found</td>
        <td>0</td>
        <td>2</td>
       </tr>
      </tbody>
     </Table>
    </div>
    <p id="playoff-win-total-percentage">
     <strong>Playoff win total (Step B - Win Percentage</strong>: The second step in calculating the win total is by factoring in the team’s win percentage. As a flat 20 wins are awarded per series win, taking into account win percentage awards the teams who won those series in 4 or 5 games instead of 7 games, and at the top end, the teams who won the title with minimal losses (2017 Golden State  Warriors, 2001 Los Angeles Lakers, 1991 Chicago Bulls or 1983 Philadelphia 76ers). This also highlights and penalises those teams who may have won the title, but struggled on their way to victory (2008 Boston Celtics).
   </p>
    <p>
     The table below shows how the win total from Step A is adjusted by win percentage for various NBA Champions.
   </p>
    <br />
    <div className="table-container" style={{ height: '330px' }}>
     <Table bordered responsive>
      <thead>
       <th>Team</th>
       <th>Year</th>
       <th>Round</th>
       <th>Win Total (Rounds)</th>
       <th>Win %</th>
       <th>Adj. Win Total</th>
      </thead>
      <tbody>
       <tr>
        <td>Golden State Warriors</td>
        <td>2017</td>
        <td>Won Finals</td>
        <td>90</td>
        <td>.941</td>
        <td>130</td>
       </tr>
       <tr>
        <td>Golden State Warriors</td>
        <td>2015</td>
        <td>Won Finals</td>
        <td>90</td>
        <td>.762</td>
        <td>114</td>
       </tr>
       <tr>
        <td>Miami Heat</td>
        <td>2013</td>
        <td>Won Finals</td>
        <td>90</td>
        <td>.696</td>
        <td>108</td>
       </tr>
       <tr>
        <td>Boston Celtics</td>
        <td>2008</td>
        <td>Won Finals</td>
        <td>90</td>
        <td>.615</td>
        <td>100</td>
       </tr>
       <tr>
        <td>Los Angeles Lakers</td>
        <td>2001</td>
        <td>Won Finals</td>
        <td>90</td>
        <td>.938</td>
        <td>129</td>
       </tr>
       <tr>
        <td>Los Angeles Lakers</td>
        <td>2000</td>
        <td>Won Finals</td>
        <td>90</td>
        <td>.652</td>
        <td>104</td>
       </tr>
       <tr>
        <td>Chicago Bulls</td>
        <td>1996</td>
        <td>Won Finals</td>
        <td>90</td>
        <td>.833</td>
        <td>120</td>
       </tr>
       <tr>
        <td>Chicago Bulls</td>
        <td>1992</td>
        <td>Won Finals</td>
        <td>90</td>
        <td>.682</td>
        <td>106</td>
       </tr>
       <tr>
        <td>Los Angeles Lakers</td>
        <td>1988</td>
        <td>Won Finals</td>
        <td>90</td>
        <td>.625</td>
        <td>101</td>
       </tr>
       <tr>
        <td>Los Angeles Lakers</td>
        <td>1982</td>
        <td>Won Finals</td>
        <td>90</td>
        <td>.857</td>
        <td>122</td>
       </tr>
      </tbody>
     </Table>
    </div>
    <p id="opposition-strength">
     <strong>Opposition Strength Adjustment</strong>: This adjustment is based on Basketball Reference’s <a href="https://www.basketball-reference.com/about/glossary.html" target="_blank">SRS</a> metric (that factors point differential and schedule strength) and gives a boost or penalty to the playoff score based upon the strength of that team’s opponents. For example, beating a .500 team results in no adjustment, however beating a 70 win team will net a substantial positive adjustment. The teams that best resemble the importance of this adjustment are the 2001 Los Angeles Lakers (who beat four 50+ win teams) and the 1995 Houston Rockets (whose opponent win totals were 60, 59, 62 and 57).
   </p>
   </section>
  )
 }
}