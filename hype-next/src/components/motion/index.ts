// HYPE Motion Primitives — single import surface.
// Re-exports every motion component for ergonomic imports:
//
//   import { MotionCard, CountUp, Stagger } from "@/components/motion";
//
export { MotionButton } from "./motion-button";
export { MotionCard } from "./motion-card";
export { MotionInput } from "./motion-input";
export { MotionLink } from "./motion-link";
export { CountUp } from "./count-up";
export { Stepper } from "./stepper";
export { PageTransition } from "./page-transition";
export { DragList } from "./drag-list";
export { ErrorState } from "./error-state";
export { Modal } from "./modal";
export { Stagger, StaggerItem } from "./stagger";
export { Accordion } from "./accordion";
export { Tabs } from "./tabs";
export { ToastProvider, useToast } from "./toast";
export { EmptyState } from "./empty-state";
export { Skeleton } from "./skeleton";

// Re-export the existing shared scroll-reveal under the same namespace.
export { ScrollReveal } from "@/components/shared/scroll-reveal";
export { SectionReveal } from "./section-reveal";
