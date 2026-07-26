import { typography, type TextVariant } from "@/theme/typography";
import type { ElementType, ReactNode } from "react";

type TextProps = {
    as?: ElementType;
    variant: TextVariant;
    className?: string;
    children: ReactNode;
    id?: string;
};

export default function Text({
    as: Tag = "p",
    variant,
    className,
    children,
    id
}: TextProps) {
    const styles = typography.text[variant];

    return (
        <Tag
            id={id}
            className={`${styles} ${className ?? ""}`}>
            {children}
        </Tag>
    );
}