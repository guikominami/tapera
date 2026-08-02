import ServicesGrid from "./ServicesGrid"
import ServicesRight from "./ServicesRight";
import Container from "@/components/ui/Container/Container";

export default function Services() {
    return (
        <section
            id="services"
            aria-labelledby="services-title"
            className="bg-services"
        >
            <Container
                className="
                    flex
                    items-center
                    justify-center
                    pt-12
                ">
                <ServicesGrid />
                <ServicesRight />
            </Container>

        </section>
    );
}