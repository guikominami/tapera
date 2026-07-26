import OrganicFrame from "@/components/ui/OrganicFrame";
import Text from "@/components/ui/Text/Text";
import { aboutData } from "@/data/about";

import aboutChildren from "@/assets/images/about/about-children.png";

export default function AboutRight() {
    return (
        <article className="relative">

            <figure
                className="
                    relative
                    z-10
                    flex
                    justify-end
                    mb-[-110px]
                "
            >
                <img
                    src={aboutChildren}
                    alt="Crianças participando das atividades do Instituto Taperá"
                />
            </figure>

            <OrganicFrame
                className="w-full"
                contentClassName="
                    px-26
                    pt-34
                    pb-18
                "
            >
                {aboutData.paragraphs.map((paragraph, index) => (
                    <Text
                        key={index}
                        variant="body"
                        className="text-brown"
                    >
                        {paragraph}
                    </Text>
                ))}
            </OrganicFrame>

        </article>
    );
}