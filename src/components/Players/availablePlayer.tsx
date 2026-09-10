import  { type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../../types/playersTypes";
import PlayerCard from "./playerCard";

interface availavlePlayerType{
    players : PlayerType[];
    coin : number;
    setCoin : Dispatch<SetStateAction<number>>;
    selectedPlayers : PlayerType[];
    setselectedPlayers : Dispatch<SetStateAction<PlayerType[]>>
}

const AvailablePlayer = ({ players, coin, setCoin, selectedPlayers, setselectedPlayers } : availavlePlayerType) => {
  return (
    <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {players.map((player: PlayerType,ind:number) => {
        return (
          <PlayerCard key = {ind} player = {player} coin = {coin} setCoin = {setCoin} selectedPlayers = {selectedPlayers} setselectedPlayers = {setselectedPlayers}></PlayerCard>
        );
      })}
    </div>
  );
};

export default AvailablePlayer;
