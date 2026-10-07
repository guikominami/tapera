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
                max-w-[340px]
                aspect-[340/270]

                lg:w-[320px]
                lg:h-[310px]
                lg:max-w-none
                lg:aspect-auto

                xl:w-[360px]
                xl:h-[260px]

                2xl:w-[420px]
                2xl:h-[310px]                

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
                    px-10
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
                    variant="body"
                    className="mt-2"
                >
                    {subtitle}
                </Text>
            </div>
        </div>
    );
}