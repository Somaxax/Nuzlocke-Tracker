# Pokémon Nuzlocke / Soul‑Link Online Tracker  
**Software Requirements Specification – Overview**

## 1 · Purpose
Create a web application that lets players track **Pokémon Nuzlocke** and **Soul‑Link** runs faster and more intuitively than existing tools.

**Key goals**
* Zero “where am I?” friction – choose the in‑game location by clicking on the game map, instead of scrolling long dropdowns.  
* Correct rule enforcement (standard, randomized, multiplayer Soul‑Link, clauses, level caps, etc.).  
* Modern UX: responsive, offline‑capable, cloud‑synced, and real‑time for linked partners.

---

## 2 · Stakeholders & Personas
| Persona | Goal |
|---------|------|
| **Solo Nuzlocker** | Track encounters quickly; avoid illegal dupes; export run summary. |
| **Soul‑Link Duo** | See partner’s catches live; auto‑flag pair deaths. |
| **Streamer / YouTuber** | Capture overlay images; share read‑only viewer link. |
| **Randomizer Enthusiast** | Search full National Dex when logging encounters. |
| **Mobile Gamer** | Enter data on the go; needs offline mode & touch‑friendly UI. |

---

## 3 · Scope

### 3.1 Supported Games
All main‑series entries (Gen I → IX + remakes). New games are added by dropping a JSON data file—no code changes.

### 3.2 Supported Modes
| Setting | Options | Notes |
|---------|---------|-------|
| **Challenge Type** | `standard` \| `randomized` | Dictates encounter list. |
| **Players** | 1 – N | N > 1 enables Soul‑Link logic. |
| **Rules (checkboxes)** | `dupesClause`, `speciesClause`, `shinyClause`, `setMode`, `levelCapEnforced`, … | Engine must validate and flag violations. |

---

## 4 · User‑Story Flow (Happy Path)
1. **Landing page** → “New Run”  
2. **Select Game** – grid of box‑art covers with live search.  
3. **Pick Mode** – toggle *Standard* ↔ *Randomized*.  
4. **Add Players** – dynamic list `{ name, color, avatar }`.  
5. **Run Dashboard** – full‑screen SVG map.  
   * Hover = tooltip (area name & methods).  
   * Click = “Encounter Drawer” opens.  
6. **Log Encounter**  
   * Autocomplete Pokémon (filtered by rules).  
   * Optional nickname & status (`alive | dead | boxed | released`).  
   * Soul‑Link pairs selected or auto‑paired.  
7. **Autosave** to localStorage + (if signed‑in) Supabase.  
8. **Share / Export**  
   * JSON backup; PNG/HTML overlay; public read‑only link.  
