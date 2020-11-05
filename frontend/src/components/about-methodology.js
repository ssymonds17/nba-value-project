import React from 'react';
import '../styles/components/index.scss';
import '../styles/components/tables.scss';
import '../styles/components/about.scss';
import Table from 'react-bootstrap/Table';

export class AboutMethodology extends React.Component {

  scrollToGreatestPlayers = () => {
    const greatestPlayersElement = document.getElementById('greatest-players');
    greatestPlayersElement.scrollIntoView(true);
  }
  scrollToNegativeVORP = () => {
    const negativeVORPElement = document.getElementById('negative-vorp');
    negativeVORPElement.scrollIntoView(true);
  }
  scrollToRegularWinTotal = () => {
    const regularWinTotalElement = document.getElementById('regular-win-total');
    regularWinTotalElement.scrollIntoView(true);
  }
  scrollToSeeding = () => {
    const seedingElement = document.getElementById('seeding');
    seedingElement.scrollIntoView(true);
  }
  scrollToBPM = () => {
    const BPMElement = document.getElementById('bpm');
    BPMElement.scrollIntoView(true);
  }
  scrollToMinutes = () => {
    const minutesElement = document.getElementById('minutes');
    minutesElement.scrollIntoView(true);
  }
  scrollToYear = () => {
    const yearElement = document.getElementById('year');
    yearElement.scrollIntoView(true);
  }
  scrollToWinTotalRounds = () => {
    const winTotalRoundsElement = document.getElementById('playoff-win-total-rounds');
    winTotalRoundsElement.scrollIntoView(true);
  }
  scrollToWinTotalPercentage = () => {
    const winTotalPercentageElement = document.getElementById('playoff-win-total-percentage');
    winTotalPercentageElement.scrollIntoView(true);
  }
  scrollToOppositionStrength = () => {
    const oppositionStrengthElement = document.getElementById('opposition-strength');
    oppositionStrengthElement.scrollIntoView(true);
  }

  render() {
    return (
      <section id="methodology">
        <h2>3. Methodology</h2>
        <br />
        <p>
          The method is all about establishing a season score for each player for each season that they played in either the NBA or the ABA. This season score represents the contribution of that player to their teams’ success, balancing their own personal performance, the team’s achievements, the quality of their teammates and the quality of their opposition. A player’s career score is the cumulation of a player’s season scores (see <a className="embedded-scroll" onClick={this.scrollToGreatestPlayers}>Greatest Players section</a>).
   </p>
        <p>
          The season score is a combination of a regular season score and a playoffs score. In this method the regular season and the playoffs are essentially separated and treated as unique entities. The main reason for this is because the advanced metrics used to calculate a player’s individual value are themselves separated into regular season and playoffs.
   </p>
        <br />
        <h4>The Advanced Metrics</h4>
        <p>
          The main ingredients in calculating a player’s seasonal value are Value Over Replacement Player (VORP) and Box Plus-Minus (BPM). There are several other publically available metrics at the moment, but as far as I’m aware VORP and BPM are the only ones designed so that they can be applied, to a reasonable measure, across multiple eras. At Basketball Reference these metrics can be found up until the 1974 season. More information regarding both metrics can be found <a href="https://www.basketball-reference.com/about/bpm2.html" target="_blank" rel="noopener noreferrer">here</a>.
   </p>
        <br />
        <h4>Regular Season</h4>
        <p>
          To calculate the regular season score we first need to identify the proportion of a team’s wins that can be attributed to a specific player.
   </p>
        <p>
          We can use Michael Jordan's 1996 season as an example.
   </p>
        <br />
        <p>
          1. First we find the VORP value for each player and then find the team total. Players with <a className="embedded-scroll" onClick={this.scrollToNegativeVORP}>negative VORP</a> values are rounded to 0.
        </p>
        <br />
        <div className="table-container" style={{ height: '100px' }}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Pos</th>
                <th>Age</th>
                <th>G</th>
                <th>MPG</th>
                <th>VORP</th>
                <th>Tm VORP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jordan</td>
                <td>SG</td>
                <td>32</td>
                <td>82</td>
                <td>37.7</td>
                <td>9.8</td>
                <td>26.8</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p>
          2. Find the percentage of the team total that each player is responsible for (VORP %).
   </p>
        <small>9.8 is 36.6% of 26.8</small>
        <div className="table-container" style={{ height: '100px' }}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Pos</th>
                <th>Age</th>
                <th>G</th>
                <th>MPG</th>
                <th>VORP</th>
                <th>Tm VORP</th>
                <th>VORP %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jordan</td>
                <td>SG</td>
                <td>32</td>
                <td>82</td>
                <td>37.7</td>
                <td>9.8</td>
                <td>26.8</td>
                <td>36.6%</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p>
          3. We can then apply each player’s proportion to their team’s win total to calculate the number of wins that they can be credited with (Season Value), very much like how win-shares works. An adjustment is made on the team's win total which is explained <a className="embedded-scroll" onClick={this.scrollToRegularWinTotal}>here</a>.
   </p>
        <p>
          The 1996 Chicago Bulls had a win total of 72. Their adjusted total is 99.
   </p>
        <small>36.6% of 99 is 36.28</small>
        <div className="table-container" style={{ height: '100px' }}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Pos</th>
                <th>Age</th>
                <th>G</th>
                <th>MPG</th>
                <th>VORP %</th>
                <th>Tm Wins</th>
                <th>Adj. Tm Wins</th>
                <th>Season Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jordan</td>
                <td>SG</td>
                <td>32</td>
                <td>82</td>
                <td>37.7</td>
                <td>36.6%</td>
                <td>72</td>
                <td>99</td>
                <td>36.28</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p>
          4. <a className="embedded-scroll" onClick={this.scrollToSeeding}>Seeding Adjustment</a>: Players are given an adjustment to their season value based on the seeding that their team achieves. Players whose team did not make the playoffs receive no adjustment. The higher the seed the greater the boost in value. The 1996 Chicago Bulls were a one seed.
   </p>
        <br />
        <div className="table-container" style={{ height: '100px' }}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Pos</th>
                <th>Age</th>
                <th>G</th>
                <th>MPG</th>
                <th>Tm Seed</th>
                <th>Season Value Before Adj.</th>
                <th>Season Value After Adj.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jordan</td>
                <td>SG</td>
                <td>32</td>
                <td>82</td>
                <td>37.7</td>
                <td>1</td>
                <td>36.28</td>
                <td>39.91</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p>
          5. <a className="embedded-scroll" onClick={this.scrollToBPM}>BPM rate statistic adjustment</a>: Players are given a boost based upon their performance per 100 possessions.
   </p>
        <p>
          For every point above zero the player is given a 4% boost to their season value.
   </p>
        <br />
        <div className="table-container" style={{ height: '100px' }}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Pos</th>
                <th>Age</th>
                <th>G</th>
                <th>MPG</th>
                <th>BPM</th>
                <th>Season Value Before Adj.</th>
                <th>Season Value After Adj.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jordan</td>
                <td>SG</td>
                <td>32</td>
                <td>82</td>
                <td>37.7</td>
                <td>10.5</td>
                <td>39.91</td>
                <td>56.67</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p>
          6. <a className="embedded-scroll" onClick={this.scrollToMinutes}>Minute's Adjustment</a>: Players have their season value adjusted depending on how far their minutes per game (MPG) are removed from the league leaders. (The lower MPG the greater the penalty).
   </p>
        <p>For every minute below the league leader average a player's MPG value is, they lose 1% to their season value</p>
        <small>The average of the top 10 leaders in MPG for 1996 was 39.63</small>
        <div className="table-container" style={{ height: '100px' }}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Pos</th>
                <th>Age</th>
                <th>G</th>
                <th>MPG</th>
                <th>Season Value Before Adj.</th>
                <th>Season Value After Adj.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jordan</td>
                <td>SG</td>
                <td>32</td>
                <td>82</td>
                <td>37.7</td>
                <td>56.67</td>
                <td>55.56</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p>
          7. <a className="embedded-scroll" onClick={this.scrollToYear}>Year Adjustment</a>: Every player in the league has their season value adjusted based on the strength of the league.
   </p>
        <small>The adjustment for the 1996 season is 5.7%</small>
        <div className="table-container" style={{ height: '100px' }}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Pos</th>
                <th>Age</th>
                <th>G</th>
                <th>MPG</th>
                <th>Season Value Before Adj.</th>
                <th>Season Value After Adj.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jordan</td>
                <td>SG</td>
                <td>32</td>
                <td>82</td>
                <td>37.7</td>
                <td>55.56</td>
                <td>58.73</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p>Have concluded this final step, we can see that Michael Jordan's final regular season score for 1996 is <strong>58.73</strong></p>
        <br />
        <h4>Playoffs</h4>
        <p>
          The key methodology for calculating a playoff score is very similar to calculating the regular season score, with two differences. Firstly, the win total is derived from:
   </p>
        <ol>
          <li>Which round of the playoffs the team progress to</li>
          <li>The win percentage of the team throughout the playoffs</li>
        </ol>
        <p>
          Secondly, an opposition strength adjustment is made in addition to the same adjustments made during the regular season calculation.
   </p>
        <br />
        <p>Once again we can use Michael Jordan's 1996 season as an example.</p>
        <br />
        <p>
          1. Find the VORP value for the player and the team.
   </p>
        <div className="table-container" style={{ height: '100px' }}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Pos</th>
                <th>Age</th>
                <th>G</th>
                <th>MPG</th>
                <th>VORP</th>
                <th>Tm VORP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jordan</td>
                <td>SG</td>
                <td>32</td>
                <td>18</td>
                <td>40.7</td>
                <td>2.4</td>
                <td>6.6</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p>
          2. Find the percentage of the team total that each player is responsible for (VORP %).
   </p>
        <small>2.4 is 36.4% of 6.6</small>
        <div className="table-container" style={{ height: '100px' }}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Pos</th>
                <th>Age</th>
                <th>G</th>
                <th>MPG</th>
                <th>VORP</th>
                <th>Tm VORP</th>
                <th>VORP %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jordan</td>
                <td>SG</td>
                <td>32</td>
                <td>18</td>
                <td>40.7</td>
                <td>2.4</td>
                <td>6.6</td>
                <td>36.4%</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p>
          3. Determine the win total for the team, from which we can extract the player's playoff value.
   </p>
        <p>
          <a className="embedded-scroll" onClick={this.scrollToWinTotalRounds}>Step A - Playoff Round</a>: The 1996 Chicago Bulls won the NBA title. They are awarded with 90 wins for how far they advanced in the playoffs.
   </p>
        <p>
          <a className="embedded-scroll" onClick={this.scrollToWinTotalPercentage}>Step B - Win Percentage</a>: The 1996 Chicago Bulls had a playoff win percentage of 83.3%. Using this their win total is adjusted to 120 wins.
   </p>
        <p>
          Apply the player's VORP % to the new win total.
   </p>
        <small>36.4% of 120 is 43.63</small>
        <div className="table-container" style={{ height: '100px' }}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Pos</th>
                <th>Age</th>
                <th>G</th>
                <th>MPG</th>
                <th>VORP %</th>
                <th>Tm Wins</th>
                <th>Playoff Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jordan</td>
                <td>SG</td>
                <td>32</td>
                <td>18</td>
                <td>40.7</td>
                <td>36.4%</td>
                <td>120</td>
                <td>43.63</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p>
          4. <a className="embedded-scroll" onClick={this.scrollToSeeding}>Seeding Adjustment</a>: Adjust the playoff value based on the team's seed from the regular season. This adjustment works in reverse to how it is applied in the regular season. Now the lower the seed, the greater the boost in value.
   </p>
        <p>
          The 1996 Chicago Bulls were a one seed and therefore receive no adjustment.
   </p>
        <br />
        <p>
          5. <a className="embedded-scroll" onClick={this.scrollToBPM}>BPM rate statistic adjustment</a>: Adjust the player's playoff value according to their BPM value.
   </p>
        <br />
        <div className="table-container" style={{ height: '100px' }}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Pos</th>
                <th>Age</th>
                <th>G</th>
                <th>MPG</th>
                <th>BPM</th>
                <th>Playoff Value Before Adj.</th>
                <th>Playoff Value After Adj.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jordan</td>
                <td>SG</td>
                <td>32</td>
                <td>18</td>
                <td>40.7</td>
                <td>10.7</td>
                <td>43.63</td>
                <td>62.30</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p>
          6. <a className="embedded-scroll" onClick={this.scrollToMinutes}>Minute's Adjustment</a>: Adjust the playoff value based upon the player's playing time.
   </p>
        <small>The average of the top 10 leaders in MPG for the 1996 playoffs was 42.80</small>
        <div className="table-container" style={{ height: '100px' }}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Pos</th>
                <th>Age</th>
                <th>MPG</th>
                <th>Playoff Value Before Adj.</th>
                <th>Playoff Value After Adj.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jordan</td>
                <td>SG</td>
                <td>32</td>
                <td>40.7</td>
                <td>62.30</td>
                <td>61.00</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p>
          7. <a className="embedded-scroll" onClick={this.scrollToOppositionStrength}>Opposition Strength Adjustment</a>: Adjust the playoff value according to the strength of the teams faced throughout the playoffs.
   </p>
        <p>
          The 1996 Chicago Bulls defeated the Miami Heat (42-40, SRS: <strong>1.46</strong>), New York Knicks (47-35, SRS: <strong>2.24</strong>), Orlando Magic (60-22, SRS: <strong>5.40</strong>) and Seattle SuperSonics (64-18, SRS: <strong>7.40</strong>). For defeating these teams the Chicago Bulls are awarded a 41% boost in their playoff value.
   </p>
        <p>A player's playoff values are not adjusted for the strength of the team they were eliminated by.</p>
        <div className="table-container" style={{ height: '100px' }}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Pos</th>
                <th>Age</th>
                <th>Total Opp. SRS</th>
                <th>Adjustment</th>
                <th>Playoff Value Before Adj.</th>
                <th>Playoff Value After Adj.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jordan</td>
                <td>SG</td>
                <td>32</td>
                <td>16.50</td>
                <td>+41%</td>
                <td>61.00</td>
                <td>86.17</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p>
          7. <a className="embedded-scroll" onClick={this.scrollToYear}>Year Adjustment</a>: Every player in the league has their season value adjusted based on the strength of the league.
   </p>
        <small>The adjustment for the 1996 season is 5.7%</small>
        <div className="table-container" style={{ height: '100px' }}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Pos</th>
                <th>Age</th>
                <th>Playoff Value Before Adj.</th>
                <th>Playoff Value After Adj.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jordan</td>
                <td>SG</td>
                <td>32</td>
                <td>86.17</td>
                <td>91.08</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p>Have concluded this final step, we can see that Michael Jordan's final playoff score for 1996 is <strong>91.08</strong></p>
        <br />
        <h4>Overall</h4>
        <p>
          To calculate a player's overall season score we can just add their regular season and playoff scores together. For Michael Jordan in 1996, that is <strong>58.73</strong> + <strong>91.08</strong> for a score of <strong>149.81</strong>.
   </p>
      </section>
    )
  }
}