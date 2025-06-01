import React from 'react';

export type Status = 'alive' | 'dead' | 'boxed' | 'released';

interface Props {
  status: Status;
}

const colorMap: Record<Status, string> = {
  alive: 'bg-green-500 text-white',
  dead: 'bg-red-600 text-white',
  boxed: 'bg-yellow-400 text-black',
  released: 'bg-gray-400 text-white',
};

export default function StatusBadge({ status }: Props) {
  return (
    <span className={`px-2 py-1 rounded text-sm font-medium ${colorMap[status]}`}>
      {status}
    </span>
  );
}
