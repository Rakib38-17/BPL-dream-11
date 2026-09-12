import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Players from "./components/Players/players";
import type { PlayerType } from "./types/playersTypes";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from "./components/Schedule/Schedule";
import Feature from "./components/Featuress/Feature";
//import type { PlayerType } from "./types/playersTypes";

const playersPromise = async (): Promise<PlayerType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [playerPromise] = useState(() => playersPromise());
  const [coin, setCoin] = useState(5000);
  console.log(coin);

  return (
    <>
      <div className="min-h-screen bg-base-200">
        <BrowserRouter>
          <Nav coin={coin} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />

                  <Suspense fallback={<h2>Loading...</h2>}>
                    <Players
                      playerPromise={playerPromise}
                      coin={coin}
                      setCoin={setCoin}
                    />
                  </Suspense>

                  <Footer />
                </>
              }
            />

            <Route
              path="/Schedule"
              element={<Schedule />}
            />
            {/* FIXTURE PAGE */}
            <Route
              path="/Featuress"
              element={<Feature />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
