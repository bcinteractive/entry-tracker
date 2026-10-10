import { useMemo, useState } from 'react';
import type { EntrySchema } from '@/types/EntrySchema';

interface Props { entries: EntrySchema[]; }

const todayStart = () => { const date = new Date(); date.setHours(0, 0, 0, 0); return date.getTime(); };

function answerQuestion(question: string, entries: EntrySchema[]): string {
  const text = question.trim().toLowerCase();
  const todayEntries = entries.filter((entry) => entry.timestamp >= todayStart());
  if (!text) return 'Ask me about today\'s scans, a code, duplicates, or totals.';
  if (text.includes('duplicate') || text.includes('repeated')) {
    const counts = new Map<string, number>();
    entries.forEach((entry) => counts.set(entry.code, (counts.get(entry.code) ?? 0) + 1));
    const duplicates = [...counts.entries()].filter(([, count]) => count > 1);
    return duplicates.length ? `I found ${duplicates.length} repeated code${duplicates.length === 1 ? '' : 's'}: ${duplicates.map(([code, count]) => `${code} (${count} scans)`).join(', ')}.` : 'I found no repeated codes.';
  }
  if (text.includes('today') || text.includes('daily')) return `There ${todayEntries.length === 1 ? 'is' : 'are'} ${todayEntries.length} entr${todayEntries.length === 1 ? 'y' : 'ies'} scanned today.`;
  if (text.includes('how many') || text.includes('total') || text.includes('count')) return `There ${entries.length === 1 ? 'is' : 'are'} ${entries.length} total entr${entries.length === 1 ? 'y' : 'ies'} recorded.`;
  const matches = entries.filter((entry) => entry.code.toLowerCase().includes(text));
  if (matches.length) return `I found ${matches.length} scan${matches.length === 1 ? '' : 's'} matching “${question.trim()}”. The latest was ${new Date(matches[0].timestamp).toLocaleString()}.`;
  return 'I can help with today\'s scans, total counts, duplicate codes, or searching for a code.';
}

export default function EntryAssistant({ entries }: Props) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const todayCount = useMemo(() => entries.filter((entry) => entry.timestamp >= todayStart()).length, [entries]);
  const ask = () => setAnswer(answerQuestion(question, entries));
  return <section className="assistant" aria-labelledby="assistant-title">
    <div className="assistant-heading"><div><p className="eyebrow">Local assistant</p><h2 id="assistant-title">Entry Assistant</h2></div><span className="assistant-status">{todayCount} today</span></div>
    <p className="assistant-help">Ask about scans, totals, duplicates, or search for a code.</p>
    <div className="assistant-form"><input value={question} onChange={(event) => setQuestion(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') ask(); }} placeholder="How many entries today?" aria-label="Ask the Entry Assistant" /><button type="button" onClick={ask}>Ask</button></div>
    {answer && <p className="assistant-answer" role="status">{answer}</p>}
  </section>;
}
