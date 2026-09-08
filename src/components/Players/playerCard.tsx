import { useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../../types/playersTypes";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

interface playerCardType {
    player: PlayerType;
    coin : number;
    setCoin : Dispatch<SetStateAction<number>>;
    selectedPlayers : PlayerType[];
    setselectedPlayers : Dispatch<SetStateAction<PlayerType[]>>
}

const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setselectedPlayers } : playerCardType ) => {
  const [isSelected, setIsSelected] = useState(false);
 

    const handleSetCoin = () => {
        setIsSelected(true)
        const newCoin = coin - player.price;
        if(newCoin >= 0){
            setCoin(newCoin)
            toast.success(`${player.playerName} is purchase sucssesfully`) 
        } else{
            toast.error('coin not enough')
        }

        // selected players logic

        setselectedPlayers([...selectedPlayers, player])
               
    }

  return (
    <div className="group overflow-hidden rounded-2xl bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Player Image */}
      <figure className="relative h-64 overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full  transition-transform duration-500 group-hover:scale-105"
        />

        {/* Player Type Badge */}
        <span className="badge badge-primary absolute right-4 top-4 px-4 py-3 font-semibold shadow-md">
          {player.playerType}
        </span>
      </figure>

      {/* Card Content */}
      <div className="card-body gap-4 p-5">
        {/* Name */}
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <FaUser />
          </div>

          <h2 className="text-xl font-bold">{player.playerName}</h2>
        </div>

        {/* Country */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-base-content/50">
              Country
            </p>

            <p className="font-semibold">{player.origin}</p>
          </div>

          <div className="text-right">
            <p className="text-xs uppercase tracking-wider text-base-content/50">
              Role
            </p>

            <p className="font-semibold">{player.playerType}</p>
          </div>
        </div>

        <div className="divider my-0"></div>

        {/* Playing Style */}
        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-base-content/60">
            Playing Style
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/50">Batting</p>
              <p className="mt-1 text-sm font-semibold">
                {player.battingStyle}
              </p>
            </div>

            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/50">Bowling</p>
              <p className="mt-1 text-sm font-semibold">
                {player.bowllingStyle}
              </p>
            </div>
          </div>
        </div>

        {/* Price & Button */}
        <div className="mt-2 flex items-center justify-between border-t border-base-200 pt-4">
          <div>
            <p className="text-xs text-base-content/50">Price</p>

            <h2 className="text-2xl font-extrabold text-primary">
              ${player.price.toLocaleString()}
            </h2>
          </div>

          <button
            onClick={() => handleSetCoin()}
            className="btn btn-primary rounded-xl px-5">
            
            {isSelected === true ? "Selected" : "Choose player"}
                       
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
