import Logo from "@/components/ui/Logo";
import Navigation from "@/components/ui/Navigation";
import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";

export default function Header() {
    return (
        <header>
            <Container className="flex items-center justify-between py-6">
                <Logo />

                <div className="flex items-center gap-8">
                    <Navigation items={navigation} />

                    <a href="#contato">
                        Contato
                    </a>
                </div>
            </Container>
        </header>
    );
}