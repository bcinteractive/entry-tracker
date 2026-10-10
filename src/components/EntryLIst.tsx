import type { EntrySchema } from '@/types/EntrySchema';
import EntryItem from './EntryItem';

interface Props {
  entries: EntrySchema[];
}

/** Placeholder list component for future filtering and pagination. */
export default function EntryLIst({ entries }: Props) {
  if (entries.length === 0) return <p>No entries yet.</p>;

  return (
    <ul>
      {entries.map((entry) => <EntryItem key={entry._id ?? `${entry.code}-${entry.timestamp}`} entry={entry} />)}
    </ul>
  );
}
