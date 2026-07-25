import { typography, type DisplayVariant } from "@/theme/typography";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils/cn";

type HeadingProps = {
    as?: ElementType;
    variant: DisplayVariant;
    className?: string;
    children: ReactNode;
    id?: string;
};

export default function Heading({ as: Tag = "h2", variant, className, children, id }: HeadingProps) {
    const styles = typography.display[variant];

    return (
        <Tag id={id} className={cn(styles, className)}>
            {children}
        </Tag>
    );

}