import Heading from "@/components/ui/Heading/Heading";

import Container from "@/components/ui/Container/Container";
import { referencesSection } from "@/data/references";
import ReferencesGrid from "./ReferencesGrid";

export default function References() {
    return (
        <section
            id="references"
            className="bg-primary-light"
        >
            <Container
                className="
                    flex
                    flex-col
                    mt-20
                ">
                <Heading
                    as="h1"
                    variant="section"
                    className="
                        w-[449px] 
                        text-left 
                        text-primary-dark 
                        mb-12
                    "
                >
                    {referencesSection.title}
                </Heading>
                <ReferencesGrid />
            </Container>
        </section >
    );
}