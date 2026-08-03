import Heading from "@/components/ui/Heading/Heading";
import Text from "@/components/ui/Text/Text";

export default function ContactInfo({ phrase, text }: { phrase: string; text: string }) {
    return (
        <div className="flex flex-row justify-center-safe gap-30 items-start">
            <Heading
                as="h1"
                variant="section"
                className="
                    text-left
                    text-primary-dark
                    max-w-[300px]
                    
                "
            >
                {phrase}
            </Heading>
            <Text
                as="p"
                variant="body"
                className="
                    mt-4 
                    max-w-[400px]
                "
            >
                {text}
            </Text>


        </div>
    )
}