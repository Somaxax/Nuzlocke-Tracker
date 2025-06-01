import { create } from 'zustand';
import type { Run } from './models';

interface RunState {
  runs: Run[];
  addRun: (run: Run) => void;
}

export const useRunStore = create<RunState>((set) => ({
  runs: [],
  addRun: (run) => set((state) => ({ runs: [...state.runs, run] })),
}));
