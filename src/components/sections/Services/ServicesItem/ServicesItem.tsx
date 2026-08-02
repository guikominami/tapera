import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text/Text";
import type { ServicesText } from "@/types/services";

type ServicesItemProps = {
    item: ServicesText;
};

export default function ServicesItem({ item }: ServicesItemProps) {
    const { title, subtitle, align, frame } = item;

    return (
        <div className="relative w-[420px] h-[310px]">
            <img
                src={frame}
                alt=""
                className="absolute inset-0 w-full h-full"
            />

            <div
                className={`
                    absolute inset-0
                    flex flex-col
                    justify-center
                    px-10
                    text-primary-light
                    ${align === "right" ? "text-right" : "text-left"}
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