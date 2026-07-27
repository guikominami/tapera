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
                text-primary-light
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
                typography.body.regular,
                "flex flex-col tracking-wide max-w-full"
            )}>
                <Text as="li" variant="body">Caminhar junto.</Text>
                <Text as="li" variant="body">Reconhecer e apoiar suas demandas.</Text>
                <Text as="li" variant="body">Construir relações de confiança.</Text>
            </ul>
        </div >
    )
}