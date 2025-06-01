import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Pokémon Nuzlocke Tracker</h1>
      <Link href="/new" className="px-4 py-2 bg-blue-600 text-white rounded">
        New Run
      </Link>
    </main>
  );
}
