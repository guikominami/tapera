import Heading from "@/components/ui/Heading/Heading";
import ActionsGrid from "./ActionsGrid";
import Container from "@/components/ui/Container/Container";
import { actionsSection } from "@/data/actions";

export default function Actions() {
    return (
        <section
            id="actions"
            className="
                bg-services
                pb-20
            "
        >
            <Container>
                <Heading
                    id="actions-title"
                    as="h1"
                    variant="section"
                    className="
                        w-[449px] 
                        text-left 
                        text-primary-light 
                        mb-12
                    "
                >
                    {actionsSection.title}
                </Heading>
                <ActionsGrid />
            </Container>
        </section >
    )
}