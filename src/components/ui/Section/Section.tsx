import { type ReactNode } from "react";
import { cn } from "@/utils/cn";

type SectionProps = {
  id?: string;
  ariaLabel: string;
  className?: string;
  children: ReactNode;
};

export default function Section({ id, ariaLabel, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      /* Centraliza o padding padrão de todas as seções do site num único lugar */
      className={cn("w-full px-6 md:px-16 py-20 text-left relative", className)}
    >
      {children}
    </section>
  );
}