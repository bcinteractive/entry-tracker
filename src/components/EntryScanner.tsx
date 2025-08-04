import { useEffect, useRef } from "react";

// @ts-ignore – html5-qrcode has no types
import { Html5QrcodeScanner } from "https://esm.sh/html5-qrcode@2.3.8";

interface Props {
  onScan: (decodedText: string) => void;
}

export default function EntryScanner({ onScan }: Props) {
  const lastScannedRef = useRef<string | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (decodedText: string) => {
        if (decodedText === lastScannedRef.current) return;
        lastScannedRef.current = decodedText;
        onScan(decodedText);
      },
      (error: string) => console.warn("Scan error", error)
    );

    return () => {
      scanner.clear().catch((e: any) =>
        console.error("Scanner cleanup error", e)
      );
    };
  }, [onScan]);

  return <div id="reader" className="w-full max-w-md mx-auto mt-4" />;
}
