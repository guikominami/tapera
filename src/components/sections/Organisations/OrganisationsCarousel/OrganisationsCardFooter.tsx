import cardFrameFooter from "@/assets/decorations/organisations/card-frame-footer.svg"
import Text from "@/components/ui/Text/Text";

export default function OrganisationsCardFooter() {
    return (
        <div className="absolute right-10 -bottom-10 z-20">
            <div className="relative">
                <img
                    src={cardFrameFooter}
                    alt=""
                />

                <Text
                    as="p"
                    variant="footer"
                    className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        text-primary-light
                    "
                >
                    Saiba mais
                </Text>
            </div>
        </div>
    )
}