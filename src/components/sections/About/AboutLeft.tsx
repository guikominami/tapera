import Heading from "@/components/ui/Heading"
import { aboutData } from "@/data/about"

import aboutYoga from "@/assets/images/about/about-yoga.png";

export default function AboutLeft() {
    return (
        <div>
            <Heading
                id="about-title"
                as="h2"
                variant="section"
                className="
                    w-[80%]
                    lg:w-full 
                "
            >
                {aboutData.title}
            </Heading>

            <figure className="mt-10 sm:mt-[42vh] mb-10 md:mb-0 /* matches Figma composition */">
                <img
                    src={aboutYoga}
                    alt="Yoga"
                    className="
                        block
                        w-[90%]
                        mx-auto
                        lg:pt-22
                        lg:w-full
                        lg:mx-0
                        h-auto
                    "
                />
            </figure>
        </div>
    )
}