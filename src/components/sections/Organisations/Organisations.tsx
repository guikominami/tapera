import Heading from "@/components/ui/Heading"
import Container from "@/components/ui/Container";
import { organisationsSection } from "@/data/organisations"
import OrganisationsCarousel from "./OrganisationsCarousel/OrganisationsCarousel";

export default function Organisations() {
    return (
        <section
            id="references"
            className="
                bg-primary-light
                py-20
            "
        >
            <Container>
                <Heading
                    as="h1"
                    variant="section"
                    className="
                        text-left 
                        text-primary-dark 
                        mb-20
                    "
                >
                    {organisationsSection.title}
                </Heading>
                <OrganisationsCarousel />
            </Container>
        </section >
    );
}