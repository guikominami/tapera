import Container from "@/components/ui/Container";
import heroBackground from "@/assets/images/hero/hero-background.jpg";

export default function Hero() {
    return (
        <section
            id="hero"
            className="
                min-h-[70vh] 
                bg-cover 
                bg-center 
                bg-no-repeat
            "
            style={{ backgroundImage: `url(${heroBackground})` }}
        >
            <div className="bg-black/40">
                <Container className="flex min-h-[70vh] items-center">
                    <div className="max-w-3xl flex flex-col gap-6">
                        <h1>
                            Nosso propósito é fortalecer
                            organizações periféricas que
                            estão fazendo a diferença na
                            sociedade e em seus territórios.
                        </h1>
                        <p>
                            Caminhar junto.
                            Reconhecer e apoiar suas demandas.
                            Construir relações de confiança.
                        </p>
                    </div>


                </Container>
            </div>

        </section>
    );
}