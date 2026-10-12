import Heading from "@/components/ui/Heading/Heading";
import Text from "@/components/ui/Text/Text";
import birds from "@/assets/decorations/contact/birds.png";

export default function Quote({ quotation, name }: { quotation: string; name: string }) {
    return (
        <div
            className="
                relative 
                h-[300px]
                lg:h-[500px]
                xl:h-[800px]
                2xl:h-[1000px]
                w-full 
                overflow-hidden 
                bg-primary-light
                p-0
                md:p-16
            "
        >
            <img
                src={birds}
                alt="Bando de andorinhas"
                className="
                    absolute 
                    top-30
                    lg:top-0
                    left-0 
                    z-0 
                    w-full 
                    max-w-[1550px]
                    object-contain 
                    object-left-bottom
                "
            />

            <div
                className="
                    relative 
                    z-10 
                    flex flex-col 
                    items-end 
                    text-right 
                    text-primary-dark
                "
            >
                <Heading
                    as="h1"
                    variant="section"
                    className="
                        lg:w-[60%]
                        text-primary-dark
                    "
                >
                    {quotation}
                </Heading>
                <Text
                    as="p"
                    variant="footer"
                    className="pr-8 pt-4 lg:p-4"
                >
                    {name}
                </Text>
            </div>

        </div>
    )
}