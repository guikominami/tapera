import type { Organisations } from "@/types/organisations";
import OrganisationsCardFooter from "./OrganisationsCardFooter";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text/Text";

type OrganisationCardProps = {
    organisations: Organisations;
};

export default function OrganisationsCard({ organisations }: OrganisationCardProps) {
    return (
        <article className="relative w-full">

            <div className="relative pt-12">

                {/* logo */}
                <div
                    className="
                        absolute 
                        -top-2 
                        left-0 
                        z-10 
                        w-24
                        lg:w-40
                        lg:-left-10
                    ">
                    <img
                        src={organisations.logo}
                        alt={organisations.name}
                        className="w-full h-auto"
                    />
                </div>

                {/* card */}
                <div className="
                    rounded-[0_70px_0_70px]
                    border-2
                    border-primary-dark
                    bg-orgs-mobile

                    px-8
                    pt-8
                    pb-16

                    lg:px-10
                    lg:pt-10
                    lg:h-[350px]

                    xl:px-20
                    xl:pt-12
                    xl:h-[440px]

                    2xl:px-20
                    2xl:pt-12
                ">
                    <Heading
                        as="h2"
                        variant="card"
                        className="
                            mb-8
                            text-left
                            lg:text-right
                            lg:pl-10
                            xl:pl-0
                        "
                    >
                        {organisations.name}
                    </Heading>

                    <Text
                        as="p"
                        variant="body"
                        className="
                            text-left
                            lg:text-right
                            lg:mb-4
                        "
                    >
                        {organisations.description}
                    </Text>

                    <OrganisationsCardFooter />
                </div>

            </div>
        </article>
    )
}