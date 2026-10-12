
import aboutYoga from "@/assets/images/about/about-yoga.png";

export default function AboutImage() {
    return (
        <article
            className="
                flex-1
                rounded-3xl
                bg-gray-200
                min-h-[500px]
            "
        >
            <figure>
                <img src={aboutYoga} alt="Yoga" />
            </figure>
        </article>
    );
}