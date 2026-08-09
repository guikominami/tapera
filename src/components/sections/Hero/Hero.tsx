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
                items-start 
                relative 
                min-h-[70vh]
                sm:min-h-[75vh]
                lg:min-h-[80vh]
                bg-cover 
                bg-center
                bg-[url('/images/hero/hero-background.jpg')]
            "
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
                            left-1/2
                            -translate-x-1/2
                            top-40
                            w-[850px]
                            max-w-none
                            sm:w-[1000px]
                            md:w-[1200px]
                            top-[230px]
                            lg:w-[1500px]

                            xl:top-[300px]

                            2xl:top-[280px]


                        "
                    />
                </div>

                <HeroContent />
            </Container>

        </section>
    );
}