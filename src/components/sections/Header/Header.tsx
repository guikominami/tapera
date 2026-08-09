import Logo from "@/components/ui/Logo";
import Navigation from "@/components/ui/Navigation";
import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { cn } from "@/utils/cn";
import { typography } from "@/theme/typography"; // 2. Importe o seu arquivo de tipografia

export default function Header() {
    return (
        <header className="h-24 md:h-28 lg:h-32 flex items-center">
            <Container className="flex items-center justify-between">

                {/* Logo */}
                <Logo />

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    <Navigation items={navigation} />

                    <a
                        href="#contato"
                        className={cn(
                            typography.ui.button,
                            "bg-[#0D6251] text-background px-6 py-2.5 font-bold text-primary-light",
                            "transition-all hover:brightness-110 active:scale-95",
                            "rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none"
                        )}
                    >
                        Contato
                    </a>
                </div>

                {/* Mobile */}
                <button
                    type="button"
                    className="md:hidden text-2xl"
                    aria-label="Abrir menu"
                >
                    ☰
                </button>

            </Container>
        </header>
    );
}