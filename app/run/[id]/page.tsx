'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import MapCanvas from '@/components/MapCanvas';
import EncounterDrawer from '@/components/EncounterDrawer';
import RuleBar from '@/components/RuleBar';
import { useRunStore } from '@/lib/store';

export default function RunPage() {
  const params = useParams();
  const { id } = params as { id: string };
  const run = useRunStore((s) => s.runs.find((r) => r.id === id));
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  if (!run) return <p className="p-4">Run not found.</p>;

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-2">Run {run.id}</h1>
      <RuleBar />
      <div className="mt-4 flex">
        <MapCanvas game={run.game} onSelectArea={setSelectedArea} />
        <EncounterDrawer areaId={selectedArea} />
      </div>
    </main>
  );
}
