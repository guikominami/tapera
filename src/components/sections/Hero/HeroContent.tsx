import { hero } from "@/data/hero";
import Heading from "@/components/ui/Heading/Heading";
import { typography } from "@/theme/typography";
import { cn } from "@/utils/cn";
import Text from "@/components/ui/Text/Text";

export default function HeroContent() {
    return (
        <div
            className="
                flex flex-col
                relative 
                z-10 
                gap-8 
                w-full 
                max-w-xl 
                md:max-w-5xl 
                text-left
                text-beige
            "
        >
            <Heading
                id="hero-title"
                as="h1"
                variant="hero"
                className="[-webkit-text-stroke:2px_#460B13] [paint-order:stroke_fill]"
            >
                {hero.title}
            </Heading>

            <ul className={cn(
                typography.display.subtitle,
                "flex flex-col tracking-wide max-w-full drop-shadow - [0_2px_4px_rgba(0, 0, 0, 0.8)]"
            )}>
                <Text as="li" variant="regular">Caminhar junto.</Text>
                <Text as="li" variant="regular">Reconhecer e apoiar suas demandas.</Text>
                <Text as="li" variant="regular">Construir relações de confiança.</Text>
            </ul>
        </div >
    )
}