interface Props {
  areaId?: string | null;
}

export default function EncounterDrawer({ areaId }: Props) {
  return (
    <aside className="w-64 border-l p-4">
      <h2 className="font-medium mb-2">Encounter</h2>
      {areaId ? (
        <p className="text-sm">Selected Area: {areaId}</p>
      ) : (
        <p className="text-sm text-gray-600">Select an area on the map to log an encounter.</p>
      )}
    </aside>
  );
}
