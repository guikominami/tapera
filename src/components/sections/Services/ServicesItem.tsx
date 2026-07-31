import servicesItemCardLeft from "./servicesItemCardLeft.svg";
import servicesItemCardRight from "./servicesItemCardRight.svg"
import type { ServicesText } from "@/types/services";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text/Text";

type ServicesItemProps = {
    item: ServicesText;
    align: "left" | "right";
};

export type align = "left" | "right";

export default function ServicesItem({ item, align }: ServicesItemProps,) {
    return (
        <div className="relative w-[420px] h-[310px]">
            <img
                src={align === "right"
                    ? servicesItemCardLeft
                    : servicesItemCardRight
                }
                className="
                    absolute inset-0
                "
            />

            <div
                className={`
                    absolute inset-0
                    flex flex-col
                    justify-center
                    px-10
                    ${align === "right"
                        ? "items-end text-right"
                        : "items-start text-left"
                    }
                    text-primary-light
                `}
            >
                <Heading
                    as="h3"
                    variant="card"
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
    );
}