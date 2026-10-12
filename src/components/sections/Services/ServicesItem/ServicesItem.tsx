import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text/Text";
import type { ServicesText } from "@/types/services";

type ServicesItemProps = {
    item: ServicesText;
};

export default function ServicesItem({ item }: ServicesItemProps) {
    const { title, subtitle, align, frame } = item;

    return (
        <div
            className="
                relative
                w-full
                max-w-[320px]
                aspect-[340/270]

                lg:w-[270px]
                lg:max-w-none
                lg:aspect-[320/220]
                lg:h-auto

                xl:w-[310px]
                xl:max-w-[380px]                
                xl:aspect-[420/310]                

                2xl:w-[420px]
                2xl:max-w-[420px]                
            ">
            <img
                src={frame}
                alt=""
                className="
                    absolute 
                    inset-0 
                    w-full 
                    h-full
                "
            />

            <div
                className={`
                    absolute inset-0
                    flex flex-col
                    justify-center
                    px-6
                    lg:px-9
                    xl:px-8
                    2xl:px-10
                    text-primary-light
                    ${align === "right" ? "lg:text-right" : "lg:text-left"}
                `}
            >
                <Heading
                    as="h3"
                    variant="card"
                >
                    {title}
                </Heading>
                <Text
                    as="p"
                    variant="minicard"
                    className="mt-2"
                >
                    {subtitle}
                </Text>
            </div>
        </div>
    );
}