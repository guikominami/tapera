import Text from "@/components/ui/Text/Text";

export default function OrganisationsCardFooter({ website }: { website: string }) {
    console.log("Website:", website);
    return (

        <div
            key={website}
            className="
                absolute
                bottom-[-35px]

                w-full
                flex
                justify-center

                lg:left-[140px]
                lg:justify-start

                xl:left-[200px]                

                2xl:left-[300px]                
            "
        >
            <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
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
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                "
            >
                <Text
                    as="span"
                    variant="footer"
                    className="text-primary-light"
                >
                    Saiba mais
                </Text>
            </a>
        </div>
    )
}