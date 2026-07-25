import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
}