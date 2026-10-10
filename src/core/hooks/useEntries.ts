import { useCallback, useEffect, useState } from 'react';
import { getAllEntries } from '@/core/db/entryDB';
import type { EntrySchema } from '@/types/EntrySchema';

/** Placeholder data hook for the future shared entry list state. */
export function useEntries() {
  const [entries, setEntries] = useState<EntrySchema[]>([]);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    setLoading(true);
    setEntries((await getAllEntries()).sort((a, b) => b.timestamp - a.timestamp));
    setLoading(false);
  }, []);

  useEffect(() => { void reload(); }, [reload]);

  return { entries, loading, reload };
}
