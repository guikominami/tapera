import { hero } from "@/data/hero";
import Heading from "@/components/ui/Heading/Heading";
import { cn } from "@/utils/cn";
import Text from "@/components/ui/Text/Text";

export default function HeroContent() {
    return (
        <div
            className="
                relative
                z-20
                w-full
                max-w-4xl
                px-4
                md:px-6
                lg:px-0
                text-left
                text-primary-light
            "
        >
            <Heading
                id="hero-title"
                as="h1"
                variant="hero"
                className="
                    max-w-4xl
                    text-primary-light
                    leading-tight
                        
                    sm:max-w-[500px]
                    md:max-w-[520px]
                    lg:max-w-[1000px]
     
                    [-webkit-text-stroke:2px_#460B13] 
                    [paint-order:stroke_fill]
                "
            >
                {hero.title}
            </Heading>

            <ul className={cn(
                "mt-6 flex flex-col tracking-wide",
                "max-w-xl"
            )}>
                <Text as="li" variant="body">Caminhar junto.</Text>
                <Text as="li" variant="body">Reconhecer e apoiar suas demandas.</Text>
                <Text as="li" variant="body">Construir relações de confiança.</Text>
            </ul>
        </div >
    )
}