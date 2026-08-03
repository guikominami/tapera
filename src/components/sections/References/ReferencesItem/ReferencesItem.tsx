import type { ReferencesTextData } from "@/types/references";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text/Text";

type ReferencesItemProps = {
    item: ReferencesTextData;
};

export default function ReferencesItem({ item }: ReferencesItemProps) {
    const { title, subtitle, frame, height } = item;

    return (
        <div className={`relative ${height}`}>
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
                    px-20
                    text-primary-dark
                `}
            >
                <Heading
                    as="h3"
                    variant="card"
                    className="mb-4"
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

    )
}