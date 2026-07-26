import Text from "@/components/ui/Text/Text";
import { aboutData } from "@/data/about";
import OrganicFrame from "@/components/ui/OrganicFrame";

export default function AboutCard() {
    return (
        <div
            className="
                relative
                border-2
                border-primary
                rounded-bl-[120px]
                rounded-tr-[120px]
                rounded-tl-none
                rounded-br-none

                px-16
                pt-24
                pb-16
            ">

            <div
                className="
                    absolute
                    inset-0
                    p-20
                    pt-[clamp(90px,10vh,140px)]
                    px-[clamp(40px,4vw,70px)]
                    pb-[clamp(40px,4vw,60px)]
                "
            >
                {aboutData.paragraphs.map((paragraph, index) => (
                    <Text
                        key={index}
                        variant="body"
                    >
                        {paragraph}
                    </Text>
                ))}

                <Text variant="highlight" className="mt-4">
                    {aboutData.highlight}
                </Text>

            </div>

        </div>
    );
}