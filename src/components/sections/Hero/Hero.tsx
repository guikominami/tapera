import Container from "@/components/ui/Container";
import heroBackground from "@/assets/images/hero/hero-background.jpg";
import { hero } from "@/data/hero";

export default function Hero() {
    return (
        <section
            id="hero"
            className="
                relative
                min-h-[70vh] 
                bg-cover 
                bg-center 
                bg-no-repeat
            "
            style={{ backgroundImage: `url(${heroBackground})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40">

                {/* Content */}
                <Container className="relative flex min-h-[70vh] items-center">
                    <div
                        className="
                            max-w-3xl 
                            flex 
                            flex-col 
                            gap-6
                        "
                    >
                        <h1
                            className="
                                text-4xl
                                font-bold
                                leading-tight
                                text-white
                                md:text-5xl
                                lg:text-5xl
                            "
                        >
                            {hero.title}
                        </h1>
                        <p
                            className="
                                text-lg
                                leading-relaxed
                                text-white
                            "
                        >
                            {hero.subtitle}
                        </p>
                    </div>


                </Container>
            </div>

        </section>
    );
}