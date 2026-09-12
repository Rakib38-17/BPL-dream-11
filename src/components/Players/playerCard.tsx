import { useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../../types/playersTypes";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

interface playerCardType {
  player: PlayerType;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: PlayerType[];
  setselectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
}

const PlayerCard = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setselectedPlayers,
}: playerCardType) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSetCoin = () => {
    setIsSelected(true);
    const newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(newCoin);
      toast.success(`${player.playerName} is purchase sucssesfully`);
    } else {
      toast.error("Coin Not Enough");
    }

    // selected players logic

    setselectedPlayers([...selectedPlayers, player]);
  };

  return (
    <div className="group overflow-hidden rounded-2xl bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Player Image */}
      <figure className="relative h-52 overflow-hidden bg-base-200 sm:h-60 md:h-64 lg:h-60 xl:h-64">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Player Type Badge */}
        <span className="badge badge-primary absolute right-3 top-3 px-3 py-2 text-xs font-semibold shadow-md sm:right-4 sm:top-4 sm:px-4 sm:py-3 sm:text-sm">
          {player.playerType}
        </span>
      </figure>

      {/* Card Content */}
      <div className="card-body gap-3 p-4 sm:gap-4 sm:p-5">
        {/* Name */}
        <div className="flex min-w-0 items-center gap-2">
          <div className="shrink-0 rounded-full bg-primary/10 p-2 text-primary">
            <FaUser />
          </div>

          <h2 className="truncate text-lg font-bold sm:text-xl">
            {player.playerName}
          </h2>
        </div>

        {/* Country & Role */}
        <div className="grid grid-cols-2 gap-3">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-base-content/50 sm:text-xs">
              Country
            </p>

            <p className="truncate text-sm font-semibold sm:text-base">
              {player.origin}
            </p>
          </div>

          <div className="min-w-0 text-right">
            <p className="text-[10px] uppercase tracking-wider text-base-content/50 sm:text-xs">
              Role
            </p>

            <p className="truncate text-sm font-semibold sm:text-base">
              {player.playerType}
            </p>
          </div>
        </div>

        <div className="divider my-0"></div>

        {/* Playing Style */}
        <div>
          <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-base-content/60 sm:mb-3 sm:text-sm">
            Playing Style
          </h3>

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {/* Batting */}
            <div className="min-w-0 rounded-xl bg-base-200 p-2.5 sm:p-3">
              <p className="text-[10px] text-base-content/50 sm:text-xs">
                Batting
              </p>

              <p className="mt-1 truncate text-xs font-semibold sm:text-sm">
                {player.battingStyle}
              </p>
            </div>

            {/* Bowling */}
            <div className="min-w-0 rounded-xl bg-base-200 p-2.5 sm:p-3">
              <p className="text-[10px] text-base-content/50 sm:text-xs">
                Bowling
              </p>

              <p className="mt-1 truncate text-xs font-semibold sm:text-sm">
                {player.bowllingStyle}
              </p>
            </div>
          </div>
        </div>

        {/* Price & Button */}
        <div className="mt-1 flex items-center justify-between gap-3 border-t border-base-200 pt-4">
          {/* Price */}
          <div className="min-w-0">
            <p className="text-[10px] text-base-content/50 sm:text-xs">Price</p>

            <h2 className="text-xl font-extrabold text-primary sm:text-2xl">
              ${player.price.toLocaleString()}
            </h2>
          </div>

          {/* Button */}
          <button
            disabled={isSelected}
            onClick={() => handleSetCoin()}
            className="btn btn-primary btn-sm shrink-0 rounded-xl px-3 sm:btn-md sm:px-5">
            {isSelected ? "Selected " : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
