import Text from "@/components/ui/Text/Text"
import Heading from "@/components/ui/Heading"

type OrganisationsContentProps = {
    name: string;
    description: string
}

export default function OrganisationsCardContent({ name, description }: OrganisationsContentProps) {
    return (

        <div
            className={`
                    absolute
                    inset-0
                    flex
                    flex-col
                    items-end
                    justify-start
                    px-16
                    py-15
                `}
        >
            <Heading
                as="h2"
                variant="card"
                className="
                            text-right
                            w-[200px]
                            h-[180px]
                            
                        "
            >
                {name}
            </Heading>

            <Text
                as="p"
                variant="body"
                className="
                            flex    
                            text-right
                            
                        "
            >
                {description}
            </Text>

        </div>

    )
}