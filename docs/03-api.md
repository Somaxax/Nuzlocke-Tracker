# API Contract

## 9 · REST & Realtime Endpoints

| Method | URL | Body / Query | Returns |
|--------|-----|--------------|---------|
| `POST` | `/runs` | `Partial<Run>` | `Run` |
| `GET`  | `/runs/:id` | – | `Run` |
| `PATCH` | `/runs/:id` | `{ encounters?: Encounter[], rules?: RunRules, … }` | `Run` |
| `WS` | `/runs/:id/stream` | – | Broadcast `RunDelta` |

`RunDelta` = same shape as `PATCH` body.
