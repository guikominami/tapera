import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1572px] px-4 sm:px-6 lg:px-2 ${className}`}>
      {children}
    </div>
  );
}