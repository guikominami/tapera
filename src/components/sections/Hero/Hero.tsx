import heroBackground from "@/assets/images/hero/hero-background.jpg";
import HeroContent from "./HeroContent";
import Container from "@/components/ui/Container/Container";

export default function Hero() {
    return (
        <section
            aria-labelledby="Nosso Propósito"
            className="
                flex flex-col 
                justify-center 
                relative 
                min-h-[80vh] 
                bg-cover 
                bg-center 
            "
            style={{ backgroundImage: `url(${heroBackground})` }}
        >
            <Container>
                {/* Camada escura de contraste */}
                <div className="absolute inset-0 bg-black/40 z-0" aria-hidden="true" />

                <HeroContent />
            </Container>

        </section>
    );
}