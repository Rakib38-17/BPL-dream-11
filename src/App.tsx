import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/Players/players";
import type { PlayerType } from "./types/playersTypes";
import Footer from "./components/footer";
//import type { PlayerType } from "./types/playersTypes";

const playersPromise = async () : Promise<PlayerType[]>  => {
    const res = await fetch ('/data.json');
    const data = await res.json();
    return data;
  }

function App() {
  const [playerPromise] = useState(() => playersPromise())
  const [coin, setCoin] = useState(5000);
  console.log(coin);

  return (
    <>
    <Nav coin = {coin} ></Nav>
    <Banner></Banner>
    
    <Suspense fallback = {<h2>Loading...</h2>}>
      <Players playerPromise = {playerPromise} coin = {coin} setCoin = {setCoin}></Players>
    </Suspense>

    <Footer></Footer>
   

    </>
  )
}

export default App
