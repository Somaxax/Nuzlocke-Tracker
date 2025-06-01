# Testing Strategy & Deployment

## 11 · Testing Strategy
| Layer | Technique | Tooling |
|-------|-----------|---------|
| Logic | Unit tests | Vitest + React Testing Library |
| UI | Component snapshots + a11y checks | Storybook + axe-core |
| E2E | Happy‑path flow | Playwright |
| Performance | Budget checks | Lighthouse CI |
| PWA | Service‑worker tests | Workbox test utils |

---

## 12 · Deployment Pipeline
1. **CI (GitHub Actions)**  
   * ESLint + Prettier  
   * Unit & E2E tests  
   * Lighthouse budget  
2. **Preview Deploy** – Vercel preview URL on each PR.  
3. **Main → Production** auto‑deploy.  
4. **DB migrations** via Supabase CLI scripts.
