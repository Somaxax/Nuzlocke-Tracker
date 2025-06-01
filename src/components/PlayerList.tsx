'use client';
import { useState } from 'react';

export default function PlayerList() {
  const [players, setPlayers] = useState<string[]>(['Player 1']);

  function addPlayer() {
    setPlayers((p) => [...p, `Player ${p.length + 1}`]);
  }

  return (
    <div>
      <h2 className="font-medium mb-2">Players</h2>
      <ul className="mb-2 space-y-1">
        {players.map((p, i) => (
          <li key={i} className="p-2 bg-gray-200 rounded">
            {p}
          </li>
        ))}
      </ul>
      <button onClick={addPlayer} className="px-2 py-1 bg-green-600 text-white rounded">
        Add Player
      </button>
    </div>
  );
}
