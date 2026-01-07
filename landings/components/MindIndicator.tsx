"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type Mind = "oracle" | "architect" | "critic" | "creator" | "guardian";

// Determine active mind based on page context
function getMindFromPath(pathname: string): Mind {
  if (pathname.includes("masterpiece") || pathname.includes("products"))
    return "creator";
  if (pathname.includes("revelation") || pathname.includes("oracle"))
    return "oracle";
  if (pathname.includes("blueprint") || pathname.includes("idea"))
    return "architect";
  if (pathname.includes("product-hunt") || pathname.includes("launch"))
    return "guardian";
  return "oracle"; // Default
}

const mindLabels: Record<Mind, string> = {
  oracle: "Oracle Active",
  architect: "Architect Active",
  critic: "Critic Active",
  creator: "Creator Active",
  guardian: "Guardian Active",
};

export default function MindIndicator() {
  const pathname = usePathname();
  const [activeMind, setActiveMind] = useState<Mind>("oracle");

  useEffect(() => {
    setActiveMind(getMindFromPath(pathname));
  }, [pathname]);

  return (
    <div className="mind-indicator" data-mind={activeMind}>
      <span className="mind-indicator-dot"></span>
      <span className="mind-indicator-label">{mindLabels[activeMind]}</span>
    </div>
  );
}
