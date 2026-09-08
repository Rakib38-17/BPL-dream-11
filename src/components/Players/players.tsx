import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../../types/playersTypes";
import AvailablePlayer from "./availablePlayer";
import SelectedPlayers from "./selectedPlayers";

interface PlayersProbs {
  playerPromise: Promise<PlayerType[]>;
  coin : number;
  setCoin : Dispatch<SetStateAction<number>>;
 
}

const Players = ({ playerPromise, coin, setCoin}: PlayersProbs) => {
  const players = use(playerPromise);

  const [selectedPlayers, setSelectedPlayers] = useState<PlayerType[]>([]);

  const [buttonType, setButtonType] = useState("Available");

  const handleUpdateBtnType = (type: "Available" | "Selected") => {
    setButtonType(type);
  };

  return (
    <div className="container mx-auto pl-40 pr-40 py-10">
      <div className="flex justify-between gap-4 mb-2 ">
        <h2 className="text-xl font-bold">
          {buttonType === "Available"
            ? "Available players"
            : "Selected players"}
        </h2>
        <div className="flex gap-1">

          <button
            onClick={() => handleUpdateBtnType("Available")}
            className={`btn ${buttonType === "Available" ? "btn-success" : ""} `}>
            Available
          </button>

          <button
            onClick={() => handleUpdateBtnType("Selected")}
            className={`btn ${buttonType === "Selected" ? "btn-success" : ""} `}>
            Selected
          </button>
        </div>
      </div>

      {buttonType === "Available" ? (
        <AvailablePlayer players={players} coin = {coin} setCoin = {setCoin} selectedPlayers = {selectedPlayers} setselectedPlayers = {setSelectedPlayers} ></AvailablePlayer>
      ) : (
        <SelectedPlayers selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers} coin = {coin} setCoin = {setCoin}></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
