# Synergia Sciences – Web Platform

A web platform for **Synergia Sciences** — an Indian manufacturer of active ingredients for household insecticides and animal health for global markets.

---

## Key Features

- **3D Native DNA Double Helix**: Real-time Three.js double helix centerpiece with interactive orbital scroll tracking.
- **Active Molecules Portfolio**: Isolated high-resolution chemical diagrams & CAS data for key molecules (Meperfluthrin, Profluthrin, Imiprothrin, Icaridin, Transfluthrin).
- **Realistic Geographic 3D Earth Globe**: Procedural geographic Three.js globe showcasing international market footprint across North America, Europe, Latin America, Asia-Pacific, and the Middle East.
- **Global Customer Reach**: Strategic credentials highlighting partnerships with Fortune 500 chemical manufacturers and global agri-science leaders.
- **Full Brand Identity**: Custom typography (Manrope + Open Sans), Synergia deep blue palette (`#085884`), and responsive layouts.

---

## Project Structure

```
medwebsite/
├── frontend/             # Next.js 16 (App Router) + React 19 + Tailwind CSS + Three.js
│   ├── public/           # Static assets, SVG/PNG textures, molecule diagrams
│   └── src/
│       ├── app/          # Next.js App Router (layout.tsx, page.tsx, globals.css)
│       └── components/   # UI components (Hero, 3D DNA Canvas, 3D Globe, Molecules Grid, etc.)
└── backend/              # Node.js + Express.js API server
    └── src/              # Routes, controllers, and server configuration
```

---

## Getting Started

### 1. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Runs at `http://localhost:3000`.

### 2. Backend Setup
```bash
cd backend
npm install
npm run dev
```
Runs at `http://localhost:5000`.
