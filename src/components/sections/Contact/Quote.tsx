import Heading from "@/components/ui/Heading/Heading";
import Text from "@/components/ui/Text/Text";
import birds from "@/assets/decorations/contact/birds.png";

export default function Quote({ quotation, name }: { quotation: string; name: string }) {
    return (
        <div
            className="
                flex
                justify-end
                h-[1021px]
                w-[100%]
                bg-no-repeat
                bg-left-bottom
            "
            style={{
                backgroundImage: `url(${birds})`,
                backgroundSize: "1550px",
            }}
        >
            <div className="w-[800px]">
                <Heading
                    as="h1"
                    variant="section"
                    className="items-end text-right"
                >
                    {quotation}
                </Heading>
                <Text
                    as="p"
                    variant="highlight"
                    className="items-end text-right mt-5"
                >
                    {name}
                </Text>
            </div>

        </div>
    )
}