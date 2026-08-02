import ServicesCard from "./ServiceCard/ServicesCard"
import { servicesSectionData } from "@/data/services"

export default function ServicesRight() {
    return (
        <div className="py-8 pl-12">
            <ServicesCard items={servicesSectionData} />
        </div>
    )
}