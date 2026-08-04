import type { TeamMembers } from "@/types/team";
import TeamOrganicFrame from "./TeamOrganicFrame";
import TeamCardEmail from "./TeamCardEmail";
import Text from "@/components/ui/Text/Text";

type TeamCardProps = {
    member: TeamMembers;
};


export default function TeamCardTop({ member }: TeamCardProps) {
    return (
        <div className="grid grid-cols-[1fr_1fr]">

            {/* foto */}
            <div className="z-10">
                <img src={member.image} alt={member.name} />
            </div>

            {/* conteúdo */}
            <div className="relative">
                <Text
                    as="p"
                    variant="footer"
                    className="text-left ml-20 mt-20"
                >
                    {member.name}
                </Text>

                <div className="relative -ml-40 mt-15 z-10">
                    <TeamOrganicFrame variant="top">
                        <Text
                            as="p"
                            variant="body"
                        >
                            {member.description}
                        </Text>
                    </TeamOrganicFrame>
                </div>
                <div className="absolute right-40 -bottom-15 z-20">
                    <TeamCardEmail email={member.email} />
                </div>
            </div>
        </div>
    )
}