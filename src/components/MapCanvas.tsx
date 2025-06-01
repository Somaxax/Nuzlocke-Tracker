export default function MapCanvas() {
  return (
    <div className="border p-4 flex-1">
      <svg viewBox="0 0 100 100" className="w-full h-64 bg-white">
        <rect x="10" y="10" width="30" height="30" fill="#fde68a" />
        <rect x="60" y="20" width="30" height="30" fill="#a7f3d0" />
        <text x="25" y="55" fontSize="8">Area 1</text>
        <text x="75" y="65" fontSize="8">Area 2</text>
      </svg>
    </div>
  );
}
