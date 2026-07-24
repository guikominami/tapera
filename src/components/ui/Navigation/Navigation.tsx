import type { NavigationItem } from "@/types/navigation";

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
            <ul className="flex items-center gap-8">
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