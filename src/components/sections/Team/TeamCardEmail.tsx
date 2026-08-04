import Text from "@/components/ui/Text/Text";
import frameCardFooter from "@/assets/decorations/team/frameCardFooter.svg";

type TeamCardEmailProps = {
    email: string;
};

export default function TeamCardEmail({ email }: TeamCardEmailProps) {
    return (
        <div
            className="
                relative
                flex
                items-center
                justify-center
            "
        >
            <img
                src={frameCardFooter}
                alt=""
            />

            <Text
                as="p"
                variant="team"
                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    text-email-team
                "
            >
                {email}
            </Text>
        </div>
    );
}