import { typography, type DisplayVariant } from "@/theme/typography";
import type { ElementType, ReactNode } from "react";

type HeadingProps = {
    as?: ElementType;
    variant: DisplayVariant;
    className?: string;
    children: ReactNode;
    id?: string;
};

export default function Heading({ as: Tag = "h2", variant, className, children }: HeadingProps) {
    const styles = typography.display[variant];

    return (
        <Tag className={`${styles} ${className ?? ""}`}>
            {children}
        </Tag>
    );

}