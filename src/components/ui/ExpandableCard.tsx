"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ExpandableCard({
  preview,
  children,
}: {
  preview: React.ReactNode;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {preview}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange transition-colors hover:text-orange/80"
      >
        {expanded ? "Weniger anzeigen" : "Mehr erfahren"}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
}
