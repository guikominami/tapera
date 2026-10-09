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
                
                justify-start
                
                items-end
                px-16
                py-15
            `}
        >
            <Heading
                as="h2"
                variant="orgs"
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
                    text-left
                    lg:text-right
                "
            >
                {description}
            </Text>

        </div>

    )
}