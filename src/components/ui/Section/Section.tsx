import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({
  children,
  className,
}: SectionProps) {
  return (
    <section className={cn("py-20", className)}>
      {children}
    </section>
  );
}