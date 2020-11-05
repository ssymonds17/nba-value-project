import React from 'react';
import '../styles/components/index.scss';
import '../styles/components/tables.scss';

export class AboutDisclaimers extends React.Component {

 render() {
  return (
   <section id="disclaimers">
    <h2>8. Disclaimers</h2>
    <br />
    <h4>VORP and BPM as metrics</h4>
    <p>
     The VORP and BPM metrics were created with the idea of being able to compare across eras in mind. For this reason they are less granular than competing metrics, and to an extent, less accurate. Whilst I could have used other publicly available metrics such as Goldstein’s <a href="https://www.bball-index.com/player-impact-plus-minus/" target="_blank" rel="noopener noreferrer">Player Impact Plus-Minus</a> (PIPM), ESPN’s <a href="http://www.espn.com/nba/statistics/rpm" target="_blank" rel="noopener noreferrer">Real Plus-Minus</a> (RPM) or FiveThirtyEight’s <a href="https://fivethirtyeight.com/features/how-our-raptor-metric-works/" target="_blank" rel="noopener noreferrer">RAPTOR</a> to make valuations for current players more accurate, many of these metrics are either not available beyond a few seasons ago, or are not publicly available. In an effort to be as consistent as possible across eras, I chose to stick as closely to VORP and BPM as possible. However, I will concede that this does have the drawback of making the valuations for current players slightly less accurate than they could otherwise be.
    </p>
    <p>
     The VORP and BPM metrics themselves also have flaws. Ben Taylor discusses the updates to the metric on his podcast (<a href="https://podcasts.apple.com/us/podcast/48-tatum-vs-giannis-bpm-2-0-inside-basketball-references/id1428290303?i=1000467090821" target="_blank" rel="noopener noreferrer">Thinking Basketball #48</a>) and highlights the tendency to undervalue big man defense and overvalue perimeter defense, especially in regards to players with gaudy steal totals.
    </p>
    <p>
     Looking at the final rankings there does seem to be a few notable players who are undervalued, and a few that may be overvalued. Examples of players who probably are undervalued are Moses Malone (#50), Steve Nash (#62), Dennis Rodman (#213) or Klay Thompson (#214). I don’t see these rankings as outrageously low, but they are low nonetheless and are examples of the BPM metric perhaps not accurately valuing what these players did on the court.
    </p>
    <p>
     On the other side, players like Maurice Cheeks (#51), Chauncey Billups (#41) and maybe even Jason Kidd (#30) may be slightly overvalued, most likely due to their perimeter defense from the point guard position being highly valued by BPM.
    </p>
    <h4>Assessing Role Players</h4>
    <p>
     There is also the issue of dealing with the impactful role player phenomenon, best resembled by Robert Horry (#44). Horry could be seen as the ultimate role player champion, playing on 7 title winning squads but never being the driving force on those teams. He is usually thrown into GOAT discussions precisely to discredit the idea of merely counting rings. However, what is rarely discussed, is to what level Horry really did contribute to each of his 7 titles. This metric identifies Horry as being a considerable contributor to the Houston Rocket titles in 1994 (2nd behind Hakeem Olajuwon) and 1995 (3rd behind Hakeem Olajuwon and Clyde Drexler), the final title of the Lakers three-peat in 2002 (3rd behind Shaquille O’Neal and Kobe Bryant) and the Spurs 2005 championship (3rd behind Manu Ginobili and Tim Duncan). For each other title team his contribution was positive and in the top 5 for the team. Robert Horry may have regularly been a non-factor in the regular season, but his playoff impact was undeniable. For this reason I’m relatively happy with his final ranking and the ranking of similarly overlooked players like Horace Grant (#61) and Jeff Hornacek (#72).
    </p>
    <h4>Issues with Playoff Scores Before 1974</h4>
    <p>
     I am slightly unsatisfied with the playoff scores for the seasons before 1974, as they are based on Win Shares instead of VORP. The explanation behind Win Shares can be seen <a href="https://www.basketball-reference.com/about/ws.html" target="_blank" rel="noopener noreferrer">here</a>. I find Win Shares too egalitarian when distributing credit across the players of a team, deflating the impact that the best players had. It also can overvalue big men, especially those that were merely role players.
    </p>
    <p>
     The best example of this would be the scores for the Boston Celtics teams of the 1960s. During the regular season, outside of his rookie season in 1957, Bill Russell is clearly the most valuable player on the team. There never was a year where his value was roughly equivalent to the second or third most valuable on his team like the proximity of value for LeBron James and Anthony Davis on the 2020 Los Angeles Lakers or Kevin Durant and Stephen Curry on the 2017 and 2018 Golden State Warriors.
    </p>
    <p>
     When evaluating the Celtics’ playoffs however, we can see that in 1957, 1964, 1968 and 1969 Russell becomes the second, third or even fourth most valuable player. Looking at each playoffs after 1974, there are no examples on a title winning team, of clearly the best player in the regular season, becoming worse than the 2nd best player during the playoffs. For this to happen on four separate occasions to Bill Russell seems implausible. Basketball Reference indicate that they will be releasing a simplified version of BPM for the seasons before 1974, and if this is the case I foresee a scenario where Bill Russell, amongst others, are given more credit for their team’s successes in the postseason, and specifically for Bill Russell, should cause him to leap above Wilt Chamberlain into 3rd place on the leaderboard.
    </p>
    <h4>Issues with the Fourth Quarter Blowouts</h4>
    <p>
     This issue specifically concerns the valuation of the MVP candidates during the 2020 regular season. Giannis Antetokounmpo won the real MVP award conclusively however this metric sees him being edged out slightly by James Harden. I think an argument can be made that James Harden has unfairly missed out on a number of MVP awards due to general dislike over his style of play, but for this specific season I think the award went to the right player. However, the issue the metric has is in identifying when a player has a lower VORP value due to being consistently rested during the fourth quarter of blowout wins, as happened to Giannis on multiple occasions during this season. Being rested in these scenarios is decidedly different to “load management” or general injury, as it is predicated on playing so well in the first three quarters that it is not required for that player to play in the final quarter. Unfortunately, this metric is unable to see the difference, and not playing is seen as not playing, missing this key element of context. Earlier examples where this might have had an effect is during Stephen Curry’s outstanding 2016 campaign, but it wasn’t enough to stop his regular season from being viewed as one of the greatest ever (currently #4).
    </p>
   </section>
  )
 }
}