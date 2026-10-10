import type { EntrySchema } from '@/types/EntrySchema';

interface Props {
  entry: EntrySchema;
}

/** Placeholder entry row for future list extraction. */
export default function EntryItem({ entry }: Props) {
  return (
    <li>
      <strong>{entry.code}</strong>
      <div>{new Date(entry.timestamp).toLocaleString()}</div>
    </li>
  );
}
