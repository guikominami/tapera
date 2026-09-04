import type { TeamMembers } from "@/types/team";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text/Text";

type TeamCardProps = {
    members: TeamMembers[];
};


export default function TeamCardMobile({ members }: TeamCardProps) {
    return (
        <div>
            {members.map(item => (
                <div key={item.name}>
                    <Heading
                        as="h2"
                        variant="card"
                        className="mb-4 text-right"
                    >
                        {item.name}
                    </Heading>
                    <img src={item.image} alt="" />
                    <div
                        className={`
                        border-2
                        border-primary-dark
                        h-auto
                        py-8
                        mb-4
                        rounded-[0_70px_0_70px]                      
                    `}>
                        <div>
                            <Text as="p" variant="body" className="px-8">
                                {item.description}
                            </Text>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    )
}