import { referencesTextData } from "@/data/references";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text/Text";

export default function ReferencesGridMobile() {
    return (
        <div>
            {referencesTextData.map((item, index) => (
                <div
                    key={item.id}
                    className={`
                        border-2
                        border-primary-dark
                        h-auto
                        py-8
                        mb-4
                        ${index % 2 === 0
                            ? "rounded-[0_70px_0_70px]"
                            : "rounded-[70px_0_70px_0]"
                        }                        
                    `}>
                    <div
                        className="
                            flex flex-col
                            justify-center
                            px-7
                            text-primary-dark
                        "
                    >
                        <Heading
                            as="h3"
                            variant="card"
                            className="mb-4"
                        >
                            {item.title}
                        </Heading>
                        <Text
                            as="p"
                            variant="body"
                            className="mt-2"
                        >
                            {item.subtitle}
                        </Text>
                    </div>
                </div>
            ))}
        </div>
    )
}