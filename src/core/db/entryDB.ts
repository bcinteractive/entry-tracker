// src/core/db/entryDB.ts

import PouchDB from "pouchdb-browser";
import { EntrySchema } from "@/types/EntrySchema";

// Create or open the database
const db = new PouchDB<EntrySchema>("entries");

// Save an entry to the database
export const saveEntry = async (entry: EntrySchema): Promise<void> => {
  try {
    const doc: EntrySchema = {
      ...entry,
      _id: `${entry.code}-${entry.timestamp}`, // Ensures consistent unique ID
    };

    await db.put(doc);
    console.log("✅ Saved entry:", doc);
  } catch (err: any) {
    if (err.status === 409) {
      console.warn("⚠️ Duplicate entry:", entry.code);
    } else {
      console.error("❌ Error saving entry:", err);
    }
  }
};

// Retrieve all entries
export const getAllEntries = async (): Promise<EntrySchema[]> => {
  const result = await db.allDocs({ include_docs: true });
  return result.rows.map((row) => row.doc!) as EntrySchema[];
};

export default db;
