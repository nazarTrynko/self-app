"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wand2,
  History,
  Trash2,
  Copy,
  Check,
  ArrowLeft,
  Clock,
  TrendingUp,
  ChevronRight,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

interface HistoryEntry {
  id: number;
  timestamp: string;
  original: string;
  transformed: string;
  score: number;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<HistoryEntry | null>(null);
  const [copied, setCopied] = useState<number | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("alchemist_history");
      if (stored) {
        setHistory(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load history:", e);
    }
  }, []);

  const handleDelete = (id: number) => {
    const updated = history.filter((h) => h.id !== id);
    setHistory(updated);
    localStorage.setItem("alchemist_history", JSON.stringify(updated));
    if (selectedEntry?.id === id) {
      setSelectedEntry(null);
    }
  };

  const handleClearAll = () => {
    setHistory([]);
    setSelectedEntry(null);
    localStorage.removeItem("alchemist_history");
  };

  const handleCopy = (entry: HistoryEntry) => {
    navigator.clipboard.writeText(entry.transformed);
    setCopied(entry.id);
    setTimeout(() => setCopied(null), 2000);
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian-950/80 backdrop-blur-xl border-b border-obsidian-800/50">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-arcane-500 flex items-center justify-center">
                <Wand2 className="w-5 h-5 text-obsidian-950" />
              </div>
              <span className="font-display font-bold text-lg">
                PromptCraft
              </span>
            </Link>
            <Link href="/alchemist" className="btn-secondary text-sm py-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Alchemist
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold mb-2 flex items-center gap-3">
                <History className="w-8 h-8 text-arcane-400" />
                Transformation History
              </h1>
              <p className="text-obsidian-400">
                Your past prompt transformations, stored locally in your
                browser.
              </p>
            </div>
            {history.length > 0 && (
              <button
                onClick={handleClearAll}
                className="text-sm text-obsidian-500 hover:text-rose-400 flex items-center gap-2 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>
        </motion.div>

        {history.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card p-12 text-center"
          >
            <AlertCircle className="w-16 h-16 text-obsidian-600 mx-auto mb-4" />
            <h2 className="font-display text-xl font-semibold mb-2">
              No History Yet
            </h2>
            <p className="text-obsidian-400 mb-6">
              Transform some prompts with The Alchemist to see them here.
            </p>
            <Link href="/alchemist" className="btn-primary inline-flex">
              <Wand2 className="w-5 h-5" />
              Start Transforming
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* History List */}
            <div className="lg:col-span-1 space-y-3">
              {history.map((entry, idx) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelectedEntry(entry)}
                  className={`glass-card p-4 cursor-pointer transition-all ${
                    selectedEntry?.id === entry.id
                      ? "border-gold-500/50"
                      : "hover:border-obsidian-600"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-obsidian-200 truncate mb-2">
                        {entry.original}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-obsidian-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatDate(entry.timestamp)}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Score: {entry.score}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-obsidian-600 flex-shrink-0" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {selectedEntry ? (
                  <motion.div
                    key={selectedEntry.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="glass-card p-6 space-y-6 sticky top-24"
                  >
                    {/* Original */}
                    <div>
                      <h3 className="text-sm font-medium text-obsidian-400 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-ember-500" />
                        Original Prompt
                      </h3>
                      <div className="p-4 rounded-lg bg-obsidian-900/50 border border-obsidian-700">
                        <p className="text-sm text-obsidian-300 whitespace-pre-wrap">
                          {selectedEntry.original}
                        </p>
                      </div>
                    </div>

                    {/* Transformed */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-gold-400 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gold-400" />
                          Transformed Prompt
                        </h3>
                        <button
                          onClick={() => handleCopy(selectedEntry)}
                          className="text-xs text-obsidian-500 hover:text-white flex items-center gap-1 transition-colors"
                        >
                          {copied === selectedEntry.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-br from-obsidian-900/90 to-obsidian-800/50 border border-gold-500/20">
                        <p className="text-sm text-obsidian-200 whitespace-pre-wrap">
                          {selectedEntry.transformed}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-obsidian-800">
                      <div className="flex items-center gap-2 text-sm text-obsidian-500">
                        <Clock className="w-4 h-4" />
                        {formatDate(selectedEntry.timestamp)}
                      </div>
                      <button
                        onClick={() => handleDelete(selectedEntry.id)}
                        className="text-sm text-obsidian-500 hover:text-rose-400 flex items-center gap-1 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="glass-card p-12 text-center sticky top-24"
                  >
                    <History className="w-12 h-12 text-obsidian-700 mx-auto mb-4" />
                    <p className="text-obsidian-500">
                      Select an entry to view details
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
