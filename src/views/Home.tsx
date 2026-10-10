import { useEffect, useState } from 'react';
import EntryScanner from '../components/EntryScanner';
import { saveEntry, getAllEntries } from '@/core/db/entryDB';
import { EntrySchema } from '@/types/EntrySchema';
import EntryAssistant from '../components/EntryAssistant';

export default function Home() {
  const [entries, setEntries] = useState<EntrySchema[]>([]);

  const loadEntries = async () => {
    const all = await getAllEntries();
    setEntries(all.sort((a, b) => b.timestamp - a.timestamp));
  };

  useEffect(() => {
    loadEntries();
  }, []);

  const handleScan = async (text: string) => {
    console.log('✅ Scanned:', text);
    await saveEntry({ code: text, timestamp: Date.now() });
    await loadEntries(); // Refresh display after saving
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold my-4">Entry Tracker</h1>
      <EntryScanner onScan={handleScan} />
      <EntryAssistant entries={entries} />

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Entries</h2>
        <ul className="list-disc list-inside text-left max-w-md mx-auto bg-white rounded p-4 shadow">
          {entries.length === 0 ? (
            <li className="text-gray-500">No entries yet</li>
          ) : (
            entries.map((entry) => (
              <li key={entry._id}>
                <strong className="text-blue-700 font-mono">{entry.code}</strong>
                <div className="text-sm text-gray-500">
                  {new Date(entry.timestamp).toLocaleString()}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
