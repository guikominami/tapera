import TeamCardTop from "./TeamCardTop"
import TeamCardBottom from "./TeamCardBottom"
import frameBackground from "@/assets/decorations/team/frameBackground.png"

import type { TeamMembers } from "@/types/team";

type TeamCardProps = {
    members: TeamMembers[];
};


export default function TeamCard({ members }: TeamCardProps) {
    return (
        <div
            className="
                flex flex-col 
                gap-30
                bg-no-repeat
                bg-center
                bg-contain
            "
            style={{
                backgroundImage: `url(${frameBackground})`,
            }}
        >
            <TeamCardTop member={members[0]} />
            <TeamCardBottom member={members[1]} />
        </div>
    )
}