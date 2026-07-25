import type { NavigationItem } from "@/types/navigation";
import { typography } from "@/theme/typography";
import { cn } from "@/utils/cn";

type NavigationProps = {
    items: NavigationItem[];
    className?: string;
};

export default function Navigation({ items, className }: NavigationProps) {
    return (
        <nav
            className={className}
            aria-label="Navegação principal"
        >
            <ul className={cn(
                typography.ui.navigation,
                "flex items-center gap-8 font-bold text-base text-brown"
            )}>
                {items.map((item) => (
                    <li key={item.href}>
                        <a href={item.href} className="transition-colors hover:text-primary">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}