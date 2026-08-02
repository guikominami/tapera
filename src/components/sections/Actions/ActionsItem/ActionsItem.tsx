import Heading from "@/components/ui/Heading/Heading";
import Text from "@/components/ui/Text/Text";
import type { ActionsTextData } from "@/types/actions";

type ActionsItemProps = {
    item: ActionsTextData;
};

export default function ActionsItem({ item }: ActionsItemProps) {
    const { title, subtitle, frame, height } = item;

    return (
        <div className={`relative ${height}`}>
            <img
                src={frame}
                alt=""
                className="absolute inset-0 w-full h-full"
            />

            <div
                className="
                    absolute inset-0
                    flex flex-col
                    justify-center
                    px-10
                    text-primary-dark
                "
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
    )
}