import Container from "@/components/ui/Container/Container";
import Heading from "@/components/ui/Heading";
import { teamSection, teamMembers } from "@/data/team";
import TeamCard from "./TeamCard";

export default function Team() {
    return (
        <section id="team" className="py-20">
            <Container className="flex flex-col items-center">
                <Heading
                    as="h1"
                    variant="section"
                    className="mb-10"
                >
                    {teamSection.title}
                </Heading>
                <div>
                    <TeamCard members={teamMembers} />
                </div>
            </Container>
        </section>
    );
}