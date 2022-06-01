import React from "react";

export function Worldle() {
  return (
    <span className="font-bold">
      SATd<span className="text-green-600">L</span>E
    </span>
    <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
      <div>
        Guess the <Worldle /> in 6 guesses.
      </div>
      <div>Each guess must be a valid municipality.</div>
      <div>
        After each guess, you will have the distance, the direction and the
        proximity from your guess and the target municipality.
      </div>
    </div>
  );
}
