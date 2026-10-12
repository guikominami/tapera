import type { ReferencesTextData } from "@/types/references";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text/Text";

type ReferencesItemProps = {
    item: ReferencesTextData;
};

export default function ReferencesItem({ item }: ReferencesItemProps) {
    const { title, subtitle, frame, height } = item;

    return (
        <div
            className={`
                relative
                ${height}
            `}
        >
            <img
                src={frame}
                alt=""
                className="
                    absolute 
                    inset-0 
                    w-full 
                    h-full
                    object-fill                     
                "
            />
            <div
                className={`
                    absolute inset-0
                    flex flex-col
                    justify-center
                    px-20
                    lg:px-8
                    xl:px-10
                    2xl:px-20
                    text-primary-dark
                `}
            >
                <Heading
                    as="h3"
                    variant="card"
                    className="mb-4 lg:mb-2 xl:mb-4"
                >
                    {title}
                </Heading>
                <Text
                    as="p"
                    variant="minicard"
                    className="mt-1"
                >
                    {subtitle}
                </Text>
            </div>
        </div>

    )
}