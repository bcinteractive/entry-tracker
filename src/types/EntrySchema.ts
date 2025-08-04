// src/types/EntrySchema.ts

export interface EntrySchema {
  _id?: string; // Required by PouchDB
  timestamp: number; // When the entry was scanned
  code: string; // The scanned code (e.g., '0005015')

  // Optional fields for future expansion
  label?: string;
  category?: string; // plugin-defined: e.g., 'student', 'staff', 'event-guest'
  meta?: Record<string, any>; // plugin-defined extra data
}
