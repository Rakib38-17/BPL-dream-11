import React from 'react';
import { useState } from "react";

const matchData = {
  team1: "Dhaka Capitals",
  team2: "Rangpur Riders",
  team1Score: "156/4",
  team2Score: "152/8",
  overs: "18.4",
  status: "LIVE",
  batsmen: [
    { name: "williamson", runs: 62, balls: 38 },
    { name: "shakib", runs: 34, balls: 21 },
  ],
  bowler: {
    name: "pat cummis",
    overs: "3.4",
    runs: 28,
    wickets: 2,
  },
};


const Feature = () => {
 const [showScorecard, setShowScorecard] = useState(false);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-base-100 shadow-xl">

        {/* Header */}
        <div className="bg-primary p-6 text-center text-primary-content">
          <div className="mb-2">
            <span className="badge badge-error text-white">
              🔴 {matchData.status}
            </span>
          </div>

          <h2 className="text-2xl font-bold">
            {matchData.team1} vs {matchData.team2}
          </h2>

          <p className="mt-2 opacity-80">
            🏟️ Sher-e-Bangla National Cricket Stadium
          </p>
        </div>

        {/* Score */}
        <div className="grid grid-cols-2 gap-4 p-6 text-center">

          <div>
            <h3 className="font-semibold">{matchData.team1}</h3>
            <p className="mt-2 text-4xl font-black">
              {matchData.team1Score}
            </p>
            <p className="text-sm opacity-60">
              {matchData.overs} Overs
            </p>
          </div>

          <div>
            <h3 className="font-semibold">{matchData.team2}</h3>
            <p className="mt-2 text-4xl font-black">
              {matchData.team2Score}
            </p>
            <p className="text-sm opacity-60">
              20 Overs
            </p>
          </div>

        </div>

        {/* Current Players */}
        <div className="grid gap-4 border-t p-6 md:grid-cols-2">

          {/* Batsmen */}
          <div className="rounded-2xl bg-base-200 p-5">
            <h3 className="mb-4 text-lg font-bold">
              🏏 Batting
            </h3>

            {matchData.batsmen.map((player) => (
              <div
                key={player.name}
                className="mb-3 flex items-center justify-between rounded-xl bg-base-100 p-3"
              >
                <div>
                  <p className="font-semibold">{player.name}</p>
                  <p className="text-xs opacity-60">
                    {player.balls} balls
                  </p>
                </div>

                <p className="text-xl font-bold">
                  {player.runs}
                </p>
              </div>
            ))}
          </div>

          {/* Bowler */}
          <div className="rounded-2xl bg-base-200 p-5">
            <h3 className="mb-4 text-lg font-bold">
              🎯 Bowling
            </h3>

            <div className="rounded-xl bg-base-100 p-4">
              <p className="font-semibold">
                {matchData.bowler.name}
              </p>

              <div className="mt-3 grid grid-cols-3 text-center">
                <div>
                  <p className="text-xs opacity-60">Overs</p>
                  <p className="font-bold">
                    {matchData.bowler.overs}
                  </p>
                </div>

                <div>
                  <p className="text-xs opacity-60">Runs</p>
                  <p className="font-bold">
                    {matchData.bowler.runs}
                  </p>
                </div>

                <div>
                  <p className="text-xs opacity-60">Wickets</p>
                  <p className="font-bold">
                    {matchData.bowler.wickets}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Recent Balls */}
        <div className="border-t p-6">
          <h3 className="mb-4 text-lg font-bold">
            Recent Balls
          </h3>

          <div className="flex flex-wrap gap-2">
            {["1", "4", "0", "W", "2", "6"].map(
              (ball, index) => (
                <span
                  key={index}
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                    ball === "W"
                      ? "bg-error text-error-content"
                      : ball === "6"
                      ? "bg-success text-success-content"
                      : "bg-base-200"
                  }`}
                >
                  {ball}
                </span>
              )
            )}
          </div>
        </div>

        {/* Button */}
        <div className="border-t p-6 text-center">
          <button
            onClick={() => setShowScorecard(!showScorecard)}
            className="btn btn-primary"
          >
            {showScorecard ? "Hide Scorecard" : "View Scorecard"}
          </button>
        </div>

        {/* Conditional Scorecard */}
        {showScorecard && (
          <div className="border-t bg-base-200 p-6">
            <h3 className="text-xl font-bold">
              Full Scorecard
            </h3>

            <p className="mt-2 opacity-70">
              Detailed batting, bowling and partnership
              statistics will appear here.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Feature;