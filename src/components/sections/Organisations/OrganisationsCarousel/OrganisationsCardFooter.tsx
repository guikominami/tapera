import Text from "@/components/ui/Text/Text";

export default function OrganisationsCardFooter() {
    return (
        <div
            className="
                absolute
                bottom-[-35px]
                lg:left-[320px]
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

                    w-[220px]
                    min-h-[70px]
                    rounded-[45px_0_45px_0]
                    bg-[#F51B3A]

                    bg-[#F51B3A]

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