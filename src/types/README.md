# 📦 Entry Tracker

An offline-first barcode scanning app built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **PouchDB**.

This project is a general-purpose entry tracking tool that records scanned barcodes (e.g., Code128) with timestamps, designed to work on both **desktop** and **mobile devices** — even **offline**.

---

## 📌 Milestone 1: Core Entry Tracker Complete

### ✅ Current Features
- [x] Scan barcodes using camera or image files (Code128 supported)
- [x] Store scanned entries with timestamp in **PouchDB**
- [x] Prevent duplicate consecutive scans
- [x] Display scanned entries in a styled list
- [x] Mobile-friendly responsive UI
- [x] Offline-first (no network required)
- [x] Modular folder structure (prepared for future plugin support)

---

## ⚙️ Tech Stack
- **Vite** for fast builds and local dev
- **React + TypeScript** for UI and typing
- **Tailwind CSS v3** for styling
- **PouchDB** for local persistent storage
- **html5-qrcode** via [ESM import](https://esm.sh) for barcode scanning

---

## 📁 Folder Structure

src/
├── assets/ # Static assets
├── components/ # Reusable UI components (scanner, entry list, etc.)
├── core/
│ ├── db/ # PouchDB setup and helper methods
│ ├── hooks/ # React hooks (e.g., for entries)
│ └── models/ # Domain models
├── plugins/ # Future plugin support
├── types/ # Shared TypeScript types (EntrySchema, etc.)
├── views/ # View-level pages like Home
├── App.tsx # App shell
└── main.tsx # Vite entry point


---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/entry-tracker.git
cd entry-tracker

## Install dependencies
npm install

## Run the dev server (LAN enabled)
npm run dev

## 📦 Build for Production
npm run build

## Preview production build locally:
npm run preview

📝 Future Roadmap

Milestone 2:

Search & filter entries

Clear/reset button

Generate reports (daily/weekly/monthly charts or tables)

    Export to CSV

Milestone 3+:

Add plugin architecture (e.g., K–12, events)

Camera selection, torch control

UI theme switcher

    PWA / installable mode

🧠 License

MIT — free for personal and commercial use.

🙌 Credits

    html5-qrcode

    PouchDB

    Tailwind CSS

    Vite