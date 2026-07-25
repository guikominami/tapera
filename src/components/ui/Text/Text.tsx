import { typography, type BodyVariant } from "@/theme/typography";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils/cn";

type TextProps = {
    as?: ElementType; // Pode ser 'p', 'span', 'li', etc.
    variant?: BodyVariant;
    className?: string;
    children: ReactNode;
};

export default function Text({ as: Tag = "p", variant = "regular", className, children }: TextProps) {
    const styles = typography.body[variant];

    return (
        <Tag className={cn(styles, className)}>
            {children}
        </Tag>
    );
}