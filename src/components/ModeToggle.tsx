'use client';
import { useState } from 'react';

interface Props {
  value: 'standard' | 'randomized';
  onChange: (mode: 'standard' | 'randomized') => void;
}

export default function ModeToggle({ value, onChange }: Props) {
  const [mode, setMode] = useState<'standard' | 'randomized'>(value);
  function select(m: 'standard' | 'randomized') {
    setMode(m);
    onChange(m);
  }
  return (
    <div className="flex items-center space-x-2">
      <span>Mode:</span>
      <button
        onClick={() => select('standard')}
        className={`px-2 py-1 rounded ${mode === 'standard' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        Standard
      </button>
      <button
        onClick={() => select('randomized')}
        className={`px-2 py-1 rounded ${mode === 'randomized' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        Randomized
      </button>
    </div>
  );
}
