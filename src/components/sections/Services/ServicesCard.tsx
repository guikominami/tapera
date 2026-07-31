import Heading from "@/components/ui/Heading"
import type { ServicesSection } from "@/types/services"
import servicesCardFrame from "./servicesCardFrame.svg"

type ServicesCardProps = {
    items: ServicesSection
}

export default function ServicesCard({ items }: ServicesCardProps) {
    return (
        <div
            className="
                relative
                w-[651px] 
                h-[1108px]
            "
        >
            <img
                src={servicesCardFrame}
                alt=""
                className="
                    absolute inset-0 
                    w-full 
                    h-full
                    z-0
                "
            />
            <div
                className="
                    absolute inset-0
                    flex flex-col
                    z-10 pt-10
                "
            >
                <Heading
                    id="services-title"
                    as="h3"
                    variant="section"
                    className="
                        items-end 
                        text-right 
                        pr-8
                        text-primary-light
                    "
                >
                    {items.title}
                </Heading>
                <div
                    className="
                        mt-16
                        h-[648px]
                        overflow-hidden
                    "
                >
                    <img
                        src={items.image}
                        className="
                        w-full
                        h-full
                        object-cover
                    "
                    />
                </div>
            </div >
        </div >
    )
}