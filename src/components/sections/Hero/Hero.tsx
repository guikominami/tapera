import heroBackground from "@/assets/images/hero/hero-background.jpg";
import HeroContent from "./HeroContent";
import Container from "@/components/ui/Container/Container";
import birds from "@/assets/decorations/transitions/birds.png"

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

                {/* Pássaros */}
                <div className="relative z-10 h-0">
                    <img
                        src={birds}
                        alt=""
                        aria-hidden="true"
                        className="
                            absolute
                            top-25
                            ml-20
                            w-[1500px]
                        "
                    />
                </div>


                <HeroContent />
            </Container>

        </section>
    );
}