import React from 'react';
import '../styles/components/index.scss';
import '../styles/components/tables.scss';

export class AboutExceptions extends React.Component {

 render() {
  return (
   <section id="exceptions">
    <h2>5. Exceptions</h2>
    <br />
    <p>
     <a href="https://www.basketball-reference.com/" target="_blank">Basketball-Reference’s</a> VORP and BPM metrics cover a large portion of the NBA’s history, however it does not encapsulate the entirety. Therefore there are some circumstances where alternative metrics had to be used. The following list outlines which metrics were used for which time periods.
    </p>
    <ul style={{ display: 'block', listStyleType: 'initial' }}>
     <li><strong>NBA and ABA 1974-2020</strong> - VORP and BPM values are provided by Basketball Reference.</li>
     <li><strong>NBA 1952-1973 Regular Season</strong> - VORP and BPM values were sourced from <a href="https://www.reddit.com/r/nbadiscussion/comments/dabgtw/historical_boxscore_plusminus_19521973/" target="_blank">third party independent research</a> and the full data set can be found <a href="https://docs.google.com/spreadsheets/d/1z0RAwCFuolsM20uVbLstF85qnaA2J-COnU0nUUM4Reo/edit#gid=595319739" target="_blank">here</a>.</li>
     <li><strong>NBA 1952-1973 Playoffs</strong> - VORP and BPM values are not currently available. They have been replaced by Win Shares and Win Shares/48 respectively.</li>
     <li><strong>NBA 1947-1951 Regular Season and Playoffs</strong> - Win Shares/48 is not available. All scores derived by using Win Shares alone.</li>
     <li><strong>ABA 1968-1973 Regular Season and Playoffs</strong> - VORP and BPM values are not currently available. They have been replaced by Win Shares and Win Shares/48 respectively.</li>
    </ul>
    <br />
    <h4>The ABA and the Shot Clock</h4>
    <p>
     It is my belief that players should be judged within the context of their era. A player from the 1960’s should not be penalised for the relatively short average player height when you consider the travel, playing equipment and lack of efficacy of surgeries during that era. Ultimately, if a player was successful, they should be acknowledged as such, without adding caveats or asterisks.
    </p>
    <p>
     However, there are two specific examples where this can not be the case. The first is the ABA and the second is the shot clock, and more specifically, the era of the NBA before the shot clock was introduced.
    </p>
    <br />
    <h4>ABA</h4>
    <p>
     The ABA operated concurrently with the NBA from 1968 until 1976 when several of its franchises merged into the NBA. There is a lot of discussion around the level of play in the ABA and it is disparaged often for being a flashy but relatively lower-level competitor.
    </p>
    <p>
     To a certain degree it is clear that when the ABA began the talent gap was large, but over the next several years this gap continued to shrink. Ben Taylor points to research done on the matter during his write-up on Julius Erving and I used the chart there as a loose guide on how to deal with the ABA problem. For each ABA season, player’s seasonal scores were given a percentage reduction to reflect the level of play in comparison to the NBA. In some ways I felt that the reductions may have been too harsh, however if they were not set at the levels I chose, <a href="https://backpicks.com/2018/01/01/backpicks-goat-16-julius-erving/" target="_blank"></a>Julius Erving would have ended up as a top 3-5 player of all time and Artis Gilmore very well may have cracked the top 20. As interesting as these findings may have been, they are far too removed from the general consensus for me to be comfortable.
    </p>
    <p>
     The list below outlines the reductions for each ABA season:
    </p>
    <ul style={{ display: 'block', listStyleType: 'initial' }}>
     <li><strong>1972-1976</strong> - 30% reduction</li>
     <li><strong>1970-1971</strong> - 35% reduction</li>
     <li><strong>1968-1969</strong> - 40% reduction</li>
    </ul>
    <br />
    <h4>The Shot Clock</h4>
    <p>
     My belief that all eras should be treated equally when assessing player greatness has itself, one caveat. If the sport in question experiences a substantial shift in how the game is played, then perhaps we can conclude that the two eras may be mutually exclusive. In the NBA’s case, this substantial shift was the introduction of the shot clock for the 1954 season. A lot has been written about the shot clock and the nature of the sport before its introduction, so I will not labour the point here, but it can be argued that to a certain degree, NBA basketball before 1954 and after 1954 are not the same thing. This isn’t the same as introducing a 3 point line in 1979-80 or the explosion in 3 point attempts in the last few years. This was more structural.
    </p>
    <p>
     With this in mind I felt obliged to make an adjustment to the season scores for those players who thrived during the shot clock era as it is easier to make the case that they would not have been able to adapt if hypothetically transported to the modern era, as the sport they played, and the sport that basketball has evolved into, are too far apart. I think that players like Jerry West, Wilt Chamberlain and Bill Russell, with modern benefits, could thrive in the modern NBA. I do not necessarily think that about players such as Ed Macauley and George Mikan.
    </p>
    <p>
     Without wanting to discredit them entirely, I settled on once again administering a season score reduction for each season. The largest reductions are for seasons before the shot clock was introduced, however there are minor reductions for the two seasons following to account for the league adjusting to the paradigm. The reduction for the period 1950-1954 is smaller than 1947 as there is evidence that the standard of play before the 1950 season, when the NBA was the Basketball Association of America (BAA), was lower than the following season when it merged with the National Basketball League (NBL).
    </p>
    <p>
     The list below outlines the reductions for each season:
    </p>
    <ul style={{ display: 'block', listStyleType: 'initial' }}>
     <li><strong>1956</strong> - 10% reduction</li>
     <li><strong>1955</strong> - 25% reduction</li>
     <li><strong>1950-1954</strong> - 30% reduction</li>
     <li><strong>1947-1949</strong> - 40% reduction</li>
    </ul>
   </section>
  )
 }
}