import React from "react"; //optional
import Player from "./Player";

function PlayerList(props) {
  //console.log("Playerlist", props);
  const onePlayer = props.playerData;

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {onePlayer.map((player) => (
        <Player
          key={player.gamerTag}
          gamerTag={player.gamerTag}
          firstName={player.firstName}
          lastName={player.lastName}
          wins={player.wins}
        />
))}
    </section>
  );
}
export default PlayerList;
