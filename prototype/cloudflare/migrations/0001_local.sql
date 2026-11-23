-- Local prototype only. Tokens are hashed before storage.
PRAGMA foreign_keys = ON;
CREATE TABLE accounts (
  id TEXT PRIMARY KEY,
  token_hash TEXT NOT NULL UNIQUE,
  backup TEXT,
  revision INTEGER NOT NULL DEFAULT 0 CHECK (revision >= 0),
  created_at TEXT NOT NULL
);
CREATE TABLE certificates (
  id TEXT PRIMARY KEY,
  account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  student_name TEXT NOT NULL,
  course_id TEXT NOT NULL,
  issued_at TEXT NOT NULL
);
CREATE INDEX certificates_account_idx ON certificates(account_id);
