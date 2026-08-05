import type { TeamMembers } from "@/types/team";
import TeamOrganicFrame from "./TeamOrganicFrame";
import TeamCardEmail from "./TeamCardEmail";
import Text from "@/components/ui/Text/Text";
import Heading from "@/components/ui/Heading";

type TeamCardProps = {
    member: TeamMembers;
};

export default function TeamCardBottom({ member }: TeamCardProps) {
    return (
        <div className="grid grid-cols-[1fr_1fr]">

            {/* conteúdo */}
            <div className="relative">
                <Heading
                    as="h2"
                    variant="team"
                    className="text-right ml-10 mt-10"
                >
                    {member.name}
                </Heading>

                <div className="relative mt-25 z-10">
                    <TeamOrganicFrame variant="bottom">
                        <Text
                            as="p"
                            variant="body"
                            className="mr-20"
                        >
                            {member.description}
                        </Text>
                    </TeamOrganicFrame>
                </div>

                <div className="absolute -right-10 -bottom-15 z-20">
                    <TeamCardEmail email={member.email} />
                </div>
            </div>

            {/* foto */}
            <div className="z-10 ml-30">
                <img src={member.image} alt={member.name} />
            </div>

        </div>

    )
}