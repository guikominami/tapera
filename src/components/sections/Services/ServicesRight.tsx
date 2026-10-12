import ServicesCard from "./ServiceCard/ServicesCard"
import { servicesSectionData } from "@/data/services"

export default function ServicesRight() {
    return (
        <div className="lg:py-8 lg:pl-12">
            <ServicesCard items={servicesSectionData} />
        </div>
    )
}