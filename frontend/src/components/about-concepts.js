import React from 'react';
import '../styles/components/index.scss';
import '../styles/components/tables.scss';

export class AboutConcepts extends React.Component {

  render() {
    return (
      <section id="concept">
        <h2>1. Concept</h2>
        <br />
        <p>
          Everybody has an opinion when it comes to the Greatest of All Time (GOAT) debate and this website is my attempt at contributing to this discussion.
   </p>
        <p>
          There have been a few excellent attempts made at presenting a greatest of all time list, such as Bill Simmons’ <a href="https://www.basketball-reference.com/awards/simmons_pyramid.html" target="_blank" rel="noopener noreferrer">Big Book of Basketball</a>, which profiles the 96 greatest players, Ben Taylor’s top 40 at <a href="https://backpicks.com/2017/12/11/the-backpicks-goat-the-40-best-careers-in-nba-history/" target="_blank" rel="noopener noreferrer">backpicks.com</a>, and the YouTuber Ben Crowley’s <a href="https://www.youtube.com/playlist?list=PLTn2dCWF6ZYqyG6VOAwVm1IvHnfuwy2Jz" target="_blank" rel="noopener noreferrer">Making the Case</a> series, where he makes the case for the 8 players he believes can be put forward as the greatest of all time.
   </p>
        <p>
          However, in the broader debate, I feel that the arguments made for why a player is or isn’t the greatest of all time are limited by their scope and a general underlying bias of the individual making the point.
   </p>
        <p>
          We all know the arguments for each player: Michael Jordan is 6-0 on the Finals, LeBron has made it to 10 Finals and 8 consecutively, Wilt averaged 50 points for a season, Kareem has 6 MVP awards and is the all-time leader in points, and so on. I don’t think these are bad arguments per se, and I know most will bring a greater level of context to the examples I’ve listed above, but it’s very difficult to define all the criteria that matters to you, apply it to all the players in the discussion and weigh them against each other just in your head. It’s an impossible task. But, with this website, that's exactly what I wanted to do, make it possible.
   </p>
        <p>
          My criteria, whether it is for the GOAT discussion or the annual MVP award, can essentially be boiled down to one thing. How much did a player contribute to their team’s end of season result? To figure this out we need to determine several things:
   </p>
        <ol>
          <li>What did the team achieve?</li>
          <li>What was the player’s individual value?</li>
          <li>How much help/support did this player have? (Did they play with multiple All-Stars or a selection of replacement level players)</li>
          <li>How strong was the team’s opposition during the playoffs? </li>
        </ol>
        <p>
          If we can then find how much a player contributed during a particular season, we can find out how much they contributed for every season. Once we have done that, we have calculated the value they contributed for their entire career. That is my method. It doesn’t take into account MVP awards, Finals MVP awards, All-NBA selections, leading the league in scoring, rebounding, assists, steals or blocks. What matters is how much what a player did on the court correlated to that team winning basketball games.
   </p>
        <p>
          By defining my criteria and applying it consistently to every player who ever played in either the NBA or ABA, I wanted to remove the bias that can creep into this kind of discussion and perhaps illuminate the players who fly under the radar and expose the players whose glaring deficiencies are too often overlooked.
  </p>
      </section>
    )
  }
}