import Logo from "@/components/ui/Logo";
import Navigation from "@/components/ui/Navigation";
import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { cn } from "@/utils/cn";
import { typography } from "@/theme/typography"; // 2. Importe o seu arquivo de tipografia

export default function Header() {
    return (
        <header>
            <Container className="flex items-center justify-between py-6">
                <Logo />

                <div className="flex items-center gap-8">
                    <Navigation items={navigation} />

                    <a
                        href="#contato"
                        className={cn(
                            typography.ui.button,
                            "bg-[#0D6251] text-background px-6 py-2.5 text-base font-bold transition-all hover:brightness-110 active:scale-95",
                            "rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none"
                        )}
                    >
                        Contato
                    </a>
                </div>
            </Container>
        </header>
    );
}