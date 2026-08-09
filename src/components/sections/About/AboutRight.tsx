import OrganicFrame from "@/components/ui/OrganicFrame";
import Text from "@/components/ui/Text/Text";
import { aboutData } from "@/data/about";

import aboutChildren from "@/assets/images/about/about-children.png";

export default function AboutRight() {
    return (
        <article className="w-full">

            <figure
                className="
                    relative
                    z-10
                    flex
                    justify-center
                    mb-[-30px]
                    lg:justify-end
                    lg:mb-[-110px]
                "
            >
                <img
                    src={aboutChildren}
                    alt="Crianças participando das atividades do Instituto Taperá"
                    className="
                        w-[90%]
                        max-w-[340px]
                        lg:w-auto
                        lg:max-w-none
                    "
                />
            </figure>

            {/* Desktop */}
            <OrganicFrame
                className="hidden lg:block w-full"
                contentClassName="
                    px-6
                    pt-14
                    pb-10

                    md:px-10
                    md:pt-20

                    lg:px-22
                    lg:pt-34
                    lg:pb-18
                "
            >
                {aboutData.paragraphs.map((paragraph, index) => (
                    <Text
                        key={index}
                        variant="body"
                        className="text-primary-dark"
                    >
                        {paragraph}
                    </Text>
                ))}
                <Text variant="highlight" className="mt-4">
                    {aboutData.highlight}
                </Text>
            </OrganicFrame>

            {/* Mobile */}
            <div className="lg:hidden px-6 py-10">
                {aboutData.paragraphs.map((paragraph, index) => (
                    <Text
                        key={index}
                        variant="body"
                        className="text-primary-dark"
                    >
                        {paragraph}
                    </Text>
                ))}

                <Text variant="highlight" className="mt-4">
                    {aboutData.highlight}
                </Text>
            </div>

        </article>
    );
}