import type { NavigationItem } from "@/types/navigation";
import { cn } from "@/utils/cn";

type NavigationProps = {
    items: NavigationItem[];
    className?: string;
};

export default function Navigation({ items, className }: NavigationProps) {
    return (
        <nav
            className={cn("flex items-center", className)}
            aria-label="Navegação principal"
        >
            <ul>
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