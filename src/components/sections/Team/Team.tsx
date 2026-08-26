import Container from "@/components/ui/Container/Container";
import Heading from "@/components/ui/Heading";
import { teamSection, teamMembers } from "@/data/team";
import TeamCard from "./TeamCard";
import TeamCardMobile from "./TeamCardMobile";

export default function Team() {
    return (
        <section id="team" className="py-20">
            <Container
                className="
                    flex
                    flex-col
                    lg:items-center
                ">
                <Heading
                    as="h1"
                    variant="section"
                    className="mb-10"
                >
                    {teamSection.title}
                </Heading>
                <div className="hidden lg:block">
                    <TeamCard members={teamMembers} />
                </div>
                <div className="block lg:hidden">
                    <TeamCardMobile members={teamMembers} />
                </div>
            </Container>
        </section>
    );
}