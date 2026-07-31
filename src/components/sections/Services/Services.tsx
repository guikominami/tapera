import ServicesGrid from "./ServicesGrid"
import ServicesRight from "./ServicesRight";

export default function Services() {
    return (
        <section
            id="services"
            aria-labelledby="services-title"
            className="
                flex
                items-center
                justify-center
                bg-services
                gap-34
            "
        >
            <ServicesGrid />
            <ServicesRight />
        </section>
    );
}