import Text from "@/components/ui/Text/Text";

export default function OrganisationsCardFooter() {
    return (
        <div
            className="
                absolute
                bottom-[-35px]
                lg:left-[300px]
                w-full
                flex
                justify-center
                lg:justify-start
            "
        >
            <button
                type="button"
                className="
                    relative
                    flex
                    items-center
                    justify-center
                    min-h-[60px]
                    w-[180px]

                    lg:w-[220px]
                    lg:min-h-[70px]
                    rounded-[45px_0_45px_0]
                    bg-orgs-footer

                    transition-all
                    hover:brightness-110
                    active:scale-95
                "
            >
                <Text
                    as="span"
                    variant="footer"
                    className="text-primary-light"
                >
                    Saiba mais
                </Text>
            </button>
        </div>
    )
}