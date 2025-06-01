'use client';
import { useState } from 'react';
import GameSelector from '@/components/GameSelector';
import ModeToggle from '@/components/ModeToggle';
import PlayerList from '@/components/PlayerList';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRunStore } from '@/lib/store';
import type { Run } from '@/lib/models';
import { nanoid } from 'nanoid';

export default function NewRun() {
  const router = useRouter();
  const addRun = useRunStore((s) => s.addRun);
  const [game, setGame] = useState('FR');
  const [mode, setMode] = useState<'standard' | 'randomized'>('standard');

  function createRun() {
    const run: Run = {
      id: nanoid(),
      game,
      mode,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      players: [],
      rules: {
        dupesClause: true,
        speciesClause: true,
        shinyClause: false,
        setMode: false,
        levelCapEnforced: false,
      },
      encounters: [],
      badges: [],
    };
    addRun(run);
    router.push(`/run/${run.id}`);
  }

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-xl font-bold">Create New Run</h1>
      <GameSelector value={game} onChange={setGame} />
      <ModeToggle value={mode} onChange={setMode} />
      <PlayerList />
      <button onClick={createRun} className="px-4 py-2 bg-blue-600 text-white rounded">
        Create Run
      </button>
      <Link href="/" className="text-blue-600 underline block mt-4">Back</Link>
    </main>
  );
}
