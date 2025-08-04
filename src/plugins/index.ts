// src/plugins/index.ts

export interface EntryPlugin {
  name: string;
  extendEntry?(entry: Entry): Entry;
  renderExtraInfo?(entry: Entry): React.ReactNode;
}

// Example plugin registry
export const plugins: EntryPlugin[] = [
  // future: import('./student/studentPlugin')
];
