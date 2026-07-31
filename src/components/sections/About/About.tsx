
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
import SectionDivider from "../SectionDivider/SectionDivider"

export default function About() {
    return (
        <section id="about" aria-labelledby="about-title">
            <div
                className="
                    relative
                    z-10
                    flex
                    justify-between
                    items-end
                    px-14
                    py-30
                "
            >
                <div className="max-w-[651px] w-full">
                    <AboutLeft />
                </div>

                <div className="max-w-[879px] w-full">
                    <AboutRight />
                </div>
            </div>

            <SectionDivider />
        </section>
    );
}