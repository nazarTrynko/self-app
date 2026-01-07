"use client";

import { useEffect, useRef } from "react";

interface PageWrapperProps {
  html: string;
  styles?: string;
  scripts?: string[];
}

export default function PageWrapper({
  html,
  styles,
  scripts,
}: PageWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Execute any scripts after mounting
    if (scripts && scripts.length > 0 && containerRef.current) {
      scripts.forEach((scriptContent) => {
        try {
          // Create a function from the script content and execute it
          const fn = new Function(scriptContent);
          fn();
        } catch (e) {
          console.warn("Script execution error:", e);
        }
      });
    }
  }, [scripts]);

  return (
    <>
      {styles && <style dangerouslySetInnerHTML={{ __html: styles }} />}
      <div
        ref={containerRef}
        className="page-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}
