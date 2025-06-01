# Functional & Non‑Functional Requirements

## 5 · Functional Requirements

### 5.1 Map Interaction
* **FR‑MAP‑01** Render scalable SVG map for selected game.  
* **FR‑MAP‑02** Each clickable area exposes a unique `areaId`.  
* **FR‑MAP‑03** Zoom (+/–, pinch) and pan (drag, swipe).

### 5.2 Encounter Logic
* **FR‑ENC‑01** Standard mode → list only legal Pokémon for area + method.  
* **FR‑ENC‑02** Randomized mode → search full National Dex.  
* **FR‑ENC‑03** On save, engine checks clauses; flag `invalid=true` if violated.  
* **FR‑ENC‑04** Status change propagates to linked encounters (Soul‑Link).

### 5.3 Rule Engine & Level Caps
* **FR‑RULE‑01** Maintain `run.rules`; validate each save.  
* **FR‑RULE‑02** Track badges/milestones; compute current `levelCap`.  
* **FR‑RULE‑03** Warn if any logged Pokémon level > cap.

### 5.4 Player & Soul‑Link
* **FR‑SL‑01** Support multiple players per run.  
* **FR‑SL‑02** Each encounter stores `linkedEncounterIds[]`.  
* **FR‑SL‑03** If one linked Pokémon dies, all linked Pokémon auto‑die.

### 5.5 Persistence & Sync
* **FR‑PERSIST‑01** Local first: IndexedDB via `localforage`.  
* **FR‑PERSIST‑02** Optional OAuth (GitHub/Google) → Supabase DB.  
* **FR‑SYNC‑01** Realtime updates via Supabase Realtime / WebSocket.

### 5.6 Import / Export
* **FR‑IO‑01** Export run as JSON (schema §8).  
* **FR‑IO‑02** Generate PNG/HTML overlay.  
* **FR‑IO‑03** Import JSON restores run completely.

### 5.7 Undo / History
* **FR‑HIST‑01** Keep 10‑step undo stack.

### 5.8 Accessibility & I18N
* **FR‑A11Y‑01** Conform to WCAG 2.1 AA.  
* **FR‑I18N‑01** UI externalised (i18next); default EN, DE fallback.

### 5.9 Offline Support
* **FR‑OFF‑01** Progressive Web App with service‑worker caching.

### 5.10 Stretch Goals
* Emulator RAM hook (Pokélink style).  
* Browser extension overlay.

---

## 6 · Non‑Functional Requirements
| ID | Requirement |
|----|-------------|
| **NFR‑PERF‑01** | First meaningful paint ≤ 2 s on mid‑range phone. |
| **NFR‑SEC‑01** | Personal data encrypted at rest (Supabase defaults). |
| **NFR‑SCAL‑01** | Handle 5k concurrent WebSocket clients. |
| **NFR‑LEGAL‑01** | Host only public‑domain sprites or user‑uploads. |
