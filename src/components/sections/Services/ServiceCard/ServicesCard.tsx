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
                h-auto

                /* Em telas normais de notebook (1024px até 1440px), o card se adapta */
                lg:w-[400px]
                lg:h-[720px]

                /* Em telas médias/grandes (1280px a 1535px) ele cresce um pouco */
                xl:w-[520px]
                xl:h-[900px]
                
                /* Mantém o seu design original intacto APENAS em telas acima de 1536px */
                2xl:w-[651px]
                2xl:h-[1108px]
            "
        >
            <img
                src={servicesCardFrame}
                alt=""
                className="
                    block
                    w-full
                    h-full
                    absolute
                    inset-0
                    object-fill /* Garante que o SVG do frame estique junto com o container */
                "
            />
            <div
                className="
                    absolute inset-0
                    flex flex-col
                    z-10 
                    pt-6
                    lg:pt-8
                    2xl:pt-10
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
                        lg:mt-6
                        lg:mr-2
                        lg:pr-8
                    "
                >
                    {items.title}
                </Heading>
                <div
                    className="
                        mt-4
                        lg:mt-8
                        xl:mt-16

                        overflow-hidden
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