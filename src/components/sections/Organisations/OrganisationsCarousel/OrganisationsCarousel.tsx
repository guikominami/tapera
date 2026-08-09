import OrganisationsCard from "./OrganisationsCard"
import { organisations } from "@/data/organisations"

export default function OrganisationsCarousel() {
    return (
        <div className="overflow-hidden">
            <div className="
                flex
                gap-10
                px-12
               
                overflow-x-auto
                snap-x
                snap-mandatory
                
                py-16

            ">
                {organisations.map((organisation) => (
                    <div
                        key={organisation.name}
                        className="
                            shrink-0
                            w-[85vw]
                            sm:w-[500px]
                            lg:w-[600px]
                        "
                    >
                        <OrganisationsCard
                            organisations={organisation}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}