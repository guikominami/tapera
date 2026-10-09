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
                    flex-col
                    pt-6
                    lg:pt-12
                    lg:items-center
                    lg:flex-row
                    lg:justify-center 
                ">
                <div className="order-2 lg:order-1">
                    <ServicesGrid />
                </div>

                <div className="order-1 lg:order-2">
                    <ServicesRight />
                </div>
            </Container>

        </section>
    );
}