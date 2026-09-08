import { type Dispatch, type SetStateAction } from 'react';
import type { PlayerType } from '../../types/playersTypes';
import { TbTrash } from 'react-icons/tb';

interface SelectedPlayerCardProbs{
    player : PlayerType;
    selectedPlayers: PlayerType[];
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
    coin : number;
    setCoin : Dispatch<SetStateAction<number>>;
}

const SelectedPlayerCard = ({coin, setCoin, selectedPlayers, setSelectedPlayers,player} : SelectedPlayerCardProbs) => {

      const handleRemovePlayer = (player : PlayerType) =>{
    
        const restPlayer = selectedPlayers.filter((selectedPlayers) => selectedPlayers.playerName !== player.playerName);
        console.log(restPlayer);
    
        setSelectedPlayers(restPlayer);
    
        const newUpdateCoin = coin + player.price;
        setCoin(newUpdateCoin);
      }

    return (
        <div className="flex gap-2 justify-between items-center py-2 px-4 border-2 border-gray-200 rounded-3xl">
            <div className="flex gap-2">
              <img
                src={player.playerImg}
                alt=""
                className="h-[50px] w-[50px]"></img>
              <div>
                <h2 className="text-2xl font-bold">{player.playerName}</h2>
                <p>{player.playerType}</p>
              </div>
            </div>
            <span className = "font-bold text-red-500 cursor-pointer"
             onClick = {() => handleRemovePlayer(player)}>
              <TbTrash></TbTrash>
            </span>
          </div>
    );
};

export default SelectedPlayerCard;