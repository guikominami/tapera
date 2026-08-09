import Heading from "@/components/ui/Heading"
import servicesCardFrame from "./frame/card-frame.svg"
import type { ServicesSection } from "@/types/services"

type ServicesCardProps = {
    items: ServicesSection
}

export default function ServicesCard({ items }: ServicesCardProps) {
    return (
        <div
            className="
                relative
                w-full
                lg:w-[651px]
                lg:h-[1108px]
            "
        >
            <img
                src={servicesCardFrame}
                alt=""
                className="
                    block
                    w-full
                    h-auto
                    lg:absolute
                    lg:inset-0
                    lg:w-full
                    lg:h-full
                "
            />
            <div
                className="
                    absolute inset-0
                    flex flex-col
                    z-10 
                    lg:pt-10
                "
            >
                <Heading
                    id="services-title"
                    as="h3"
                    variant="section"
                    className="
                        items-end
                        text-right 
                        text-primary-light
                        mt-10
                        mr-6
                        lg:m-0
                        lg:pr-8
                    "
                >
                    {items.title}
                </Heading>
                <div
                    className="
                        mt-8
                        h-[648px]
                        overflow-hidden
                        lg:mt-16
                    "
                >
                    <img
                        src={items.image}
                        className="
                        w-full
                        lg:h-full
                        object-cover
                    "
                    />
                </div>
            </div >
        </div >
    )
}