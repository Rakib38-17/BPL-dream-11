import  { type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../../types/playersTypes";
import SelectedPlayerCard from "./selectedPlayerCard";

interface SelectedPlayersType {
  selectedPlayers: PlayerType[];
  setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
  coin : number;
  setCoin : Dispatch<SetStateAction<number>>;
}
const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: SelectedPlayersType) => {
  console.log(selectedPlayers);

  if (selectedPlayers.length === 0) {
    return (
      <h2 className="font-semibold text-3xl text-mauve-700 text-center py-6">
        No Selected Player Found
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-7 mt-5">
      {selectedPlayers.map((player: PlayerType, ind : number) => {
        return (
          <div>
            <SelectedPlayerCard
            key = {ind} 
            player = {player}
            coin = {coin}
            setCoin = {setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}>
           </SelectedPlayerCard>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
