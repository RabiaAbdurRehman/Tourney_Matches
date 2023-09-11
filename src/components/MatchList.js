import React from "react"; //optional
import Match from "./Match";
// import matchData from "../ data/matchData";

function MatchList(props) {
  //console.log(props);
  const oneMatch = props.matchData;

  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {oneMatch.map((match, index) => (
        <Match
          key={match.matchNumber}
          players={match.players}
          winner={match.winner}
          scoreDifference={match.scoreDifference}
        />
      ))}
    </section>
  );
}

export default MatchList;
