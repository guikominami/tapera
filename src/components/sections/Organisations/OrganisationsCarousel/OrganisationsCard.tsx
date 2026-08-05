import cardFrame from "@/assets/decorations/organisations/card-frame.svg"
import OrganisationsCardContent from "./OrganisationsCardContent";
import OrganisationsCardFooter from "./OrganisationsCardFooter";
import type { Organisations } from "@/types/organisations";


type OrganisationCardProps = {
    organisations: Organisations;
};


export default function OrganisationsCard({ organisations }: OrganisationCardProps) {
    return (
        <div className="relative w-fit">

            {/* logo */}
            <div className="absolute -top-10 -left-10 z-20">
                <img
                    src={organisations.logo}
                    alt={organisations.name}
                />
            </div>

            {/* conteúdo */}
            <div className="relative">
                <img
                    src={cardFrame}
                    alt=""
                />

                <OrganisationsCardContent
                    name={organisations.name}
                    description={organisations.description}
                />

                <OrganisationsCardFooter />

            </div>


        </div>
    )
}