import heroBackground from "@/assets/images/hero/hero-background.jpg";
import HeroContent from "./HeroContent";

export default function Hero() {
    return (
        <section
            aria-label="Nosso Propósito"
            className="
                flex flex-col 
                justify-center 
                items-start 
                relative 
                w-full 
                min-h-[80vh] 
                bg-cover 
                bg-center 
                px-6 md:px-16 
                py-20
            "
            style={{ backgroundImage: `url(${heroBackground})` }}
        >
            {/* Camada escura de contraste */}
            <div className="absolute inset-0 bg-black/40 z-0" aria-hidden="true" />

            <HeroContent />
        </section>
    );
}