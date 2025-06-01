interface Props {
  value: string;
  onChange: (game: string) => void;
}

export default function GameSelector({ value, onChange }: Props) {
  return (
    <div>
      <label className="block mb-2 font-medium">Select Game</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="FR">Fire Red</option>
        <option value="HGSS">HeartGold / SoulSilver</option>
        <option value="SV">Scarlet / Violet</option>
      </select>
    </div>
  );
}
