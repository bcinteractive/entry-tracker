export interface Entry {
  id: string;               // e.g. barcode or UUID
  scannedAt: string;        // ISO timestamp
  source?: string;          // optional info about scanner/device
  meta?: Record<string, any>; // plugin-specific metadata
}
