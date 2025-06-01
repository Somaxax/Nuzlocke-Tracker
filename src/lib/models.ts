export type Run = {
  id: string;
  game: string;
  mode: 'standard' | 'randomized';
  createdAt: string;
  updatedAt: string;
  players: Player[];
  rules: RunRules;
  encounters: Encounter[];
  badges: Badge[];
};

export type Player = {
  id: string;
  name: string;
  color: string;
  avatarUrl?: string;
};

export type Encounter = {
  id: string;
  areaId: string;
  playerId: string;
  pokemonId: number;
  nickname?: string;
  status: 'alive' | 'dead' | 'boxed' | 'released';
  level: number;
  method: string;
  linkedEncounterIds: string[];
  isValid: boolean;
};

export type RunRules = {
  dupesClause: boolean;
  speciesClause: boolean;
  shinyClause: boolean;
  setMode: boolean;
  levelCapEnforced: boolean;
};

export type Badge = {
  id: string;
  name: string;
  obtainedAt?: string;
  levelCap: number;
};
