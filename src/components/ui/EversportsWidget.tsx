"use client";

import { useEffect, useRef } from "react";

export default function EversportsWidget({
  widgetId,
}: {
  widgetId: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the widget div
    const widgetDiv = document.createElement("div");
    widgetDiv.setAttribute("data-eversports-widget-id", widgetId);
    containerRef.current.appendChild(widgetDiv);

    // Load the script
    const script = document.createElement("script");
    script.src = "https://widget-static.eversports.io/loader.js";
    script.type = "module";
    script.async = true;
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [widgetId]);

  return <div ref={containerRef} className="min-h-[500px]" />;
}
