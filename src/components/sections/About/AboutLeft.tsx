import Heading from "@/components/ui/Heading"
import { aboutData } from "@/data/about"

import aboutYoga from "@/assets/images/about/about-yoga.png";

export default function AboutLeft() {
    return (
        <div className="flex flex-col gap-12">
            <Heading
                id="about-title"
                as="h2"
                variant="section"
            >
                {aboutData.title}
            </Heading>

            <figure className="mt-[20vh] /* matches Figma composition */">
                <img
                    src={aboutYoga}
                    alt="Yoga"
                    className="block w-full h-auto"
                />
            </figure>
        </div>
    )
}