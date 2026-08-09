import Container from "@/components/ui/Container/Container";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
import SectionDivider from "../SectionDivider/SectionDivider"


export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className="mt-8 sm:mt-20"
        >
            <Container
                className="
                    relative
                    z-10
                    flex
                    flex-col
                    items-center
                    lg:flex-row
                    lg:items-start
                    lg:justify-between
                    lg:gap-0
                "
            >
                <div className="w-full lg:max-w-[550px]">
                    <AboutLeft />
                </div>

                <div className="w-full lg:max-w-[850px]">
                    <AboutRight />
                </div>

            </Container>
            <SectionDivider />
        </section>
    );
}