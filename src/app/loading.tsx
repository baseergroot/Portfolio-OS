'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div
        className={`flex flex-col items-center gap-6 transition-all duration-500 ease-out ${
          show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* OS-style identity mark */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30">
          <span className="text-white text-3xl font-medium tracking-tight leading-none select-none">
            B
          </span>
        </div>

        {/* Minimal boot indicator (subtle, non-webby) */}
        <div className="flex gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/40 animate-pulse" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40 animate-pulse delay-150" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40 animate-pulse delay-300" />
        </div>
      </div>
    </div>
  );
}
