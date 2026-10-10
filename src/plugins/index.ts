// src/plugins/index.ts

import type { ReactNode } from 'react';
import type { EntrySchema } from '@/types/EntrySchema';

export interface EntryPlugin {
  name: string;
  extendEntry?(entry: EntrySchema): EntrySchema;
  renderExtraInfo?(entry: EntrySchema): ReactNode;
}

// Example plugin registry
export const plugins: EntryPlugin[] = [
  // future: import('./student/studentPlugin')
];
