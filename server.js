import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import sqlite3 from 'sqlite3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// SQLite setup
const dbPath = path.join(__dirname, 'db.sqlite');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`
  );
});

// Health
app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

// Subscribe endpoint
app.post('/api/subscribe', (req, res) => {
  const { name, email } = req.body || {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Netinkamas el. paštas' });
  }
  if (!name || String(name).trim().length < 2) {
    return res.status(400).json({ error: 'Įveskite vardą' });
  }

  const stmt = db.prepare('INSERT OR IGNORE INTO subscribers (name, email) VALUES (?, ?)');
  stmt.run(name.trim(), email.trim(), function (err) {
    if (err) {
      return res.status(500).json({ error: 'Serverio klaida' });
    }
    if (this.changes === 0) {
      return res.status(200).json({ ok: true, message: 'Jau užregistruotas' });
    }
    return res.status(201).json({ ok: true });
  });
  stmt.finalize();
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});


