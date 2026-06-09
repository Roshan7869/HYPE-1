"use client";

import { Reorder, useDragControls, motion } from "framer-motion";
import { GripVertical } from "lucide-react";
import { type ReactNode } from "react";

export interface DragItem {
  id: string;
  content: ReactNode;
}

interface DragListProps {
  items: DragItem[];
  onReorder: (ids: string[]) => void;
  className?: string;
}

/**
 * Vertical reorderable list (used by the Photos page). Each item is
 * a row with a left drag handle that responds to pointer drag.
 */
export function DragList({ items, onReorder, className }: DragListProps) {
  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={(next) => onReorder(next.map((i) => i.id))}
      className={className}
    >
      {items.map((item) => (
        <Reorder.Item key={item.id} value={item} className="list-none">
          <DragRow item={item} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

function DragRow({ item }: { item: DragItem }) {
  const controls = useDragControls();
  return (
    <motion.div
      className="flex items-center gap-3 rounded-md border border-line bg-white p-3 shadow-sm"
      whileHover={{ boxShadow: "0 8px 20px -8px rgba(20,20,20,0.12)" }}
      transition={{ duration: 0.2 }}
    >
      <button
        type="button"
        aria-label="Drag to reorder"
        onPointerDown={(e) => controls.start(e)}
        className="cursor-grab touch-none rounded p-1 text-muted hover:bg-cream-2 active:cursor-grabbing"
      >
        <GripVertical className="h-4 w-4" />
      </button>
      <div className="flex-1">{item.content}</div>
    </motion.div>
  );
}
