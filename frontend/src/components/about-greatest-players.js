import React from 'react';
import '../styles/components/index.scss';
import '../styles/components/tables.scss';

export class AboutGreatestPlayers extends React.Component {

 render() {
  return (
   <section id="greatest-players">
    <h2>6. Greatest Players</h2>
    <br />
    <p>
     The main two factors relevant to my GOAT argument are longevity and impact. For some people being influential is important, for others it can be whether that athlete transcends their sport (think Muhammad Ali, Michael Jordan or Babe Ruth). For me, it is longevity and impact. Longevity is self explanatory, how long was a player able to make a positive contribution to their team. Impact concerns how big that contribution was, especially in a player’s best seasons.
    </p>
    <p>
     In coming to a final career score longevity is dealt with first. This step is simple, merely adding all the season scores together to come to a career total. The players who accrue the highest career totals are the obvious ones: John Stockton, Karl Malone, Kareem Abdul-Jabbar. These players are rewarded by both how long they played, but also by the fact that the contributions they made were substantial up until their 19th and 20th seasons.
    </p>
    <p>
     The second step involves determining impact. Initially this also sounds simple, who attained the highest season scores? Looking at a player’s single greatest season however would give a skewed insight into that player’s career. There are numerous examples of players who flamed out after promising starts or were limited by injury. Unfortunately for those players, being injured precludes them from being on the court, which limits their ability to contribute which, in turn, limits their ability to climb up the rankings. This impacts players like Bill Walton and David Thompson.
    </p>
    <p>
     So if we aren’t looking for a player’s greatest season, how about an average for all their seasons? Surely that will provide a good overview of the impact a player had throughout their career. Again, I disagree. Averaging every season would diminish the values of the aforementioned players with exceptional longevity.
    </p>
    <p>
     The middle ground is the answer. We find the average of a certain number of seasons. In Bill James’ <em>Historical Baseball Abstract</em> he considered the average of a player’s best 3 seasons <strong>and</strong> a player’s best 5 seasons consecutively. In this case he felt he was able to accurately represent a player's absolute peak (best 3 seasons) and balance that with a sustained period of excellence (best 5 seasons consecutively). He admits, as I will now, that any choice of seasons are wholly arbitrary and if instead the best 4, 7, 10 or 15 seasons were chosen, we would receive a different set of results. Bill James settled on 3 best and 5 consecutive. I will put one foot in each camp and settle on the best 7 non-consecutive seasons.
    </p>
    <p>
     The reason for this is that I wanted to capture the broad range of peaks that players can have. The majority of players may have a peak of around 3-7 years. Gilbert Arenas would be an example of a shorter peak (2005-2007). At the other end you would have a player like Kareem (1970-1986/1987). If we chose the best 10+ seasons, this would merely reward those with exceptional longevity once again. If we only chose the best 3-5 we would skew more towards the flash in the pan players who shone brightly and then disappeared. By choosing the best non-consecutive 7 seasons, we take into account seasons of excellence from more short term stars, while ensuring that they are not overly rewarded for their lack of longevity, still reward players who are able to maintain a period of sustained excellence, and avoid penalising a player for who may have suffered an injury right in the middle of their prime which would have broken up a stretch of consecutively good seasons.
    </p>
    <p>
     On each player’s page, both the career total (found in the table footer) and peak average, are displayed. These are combined to generate the player’s career value.
    </p>
   </section>
  )
 }
}