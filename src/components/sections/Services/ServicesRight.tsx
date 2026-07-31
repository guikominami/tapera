import ServicesCard from "./ServicesCard"
import { servicesSectionData } from "@/data/services"

export default function ServicesRight() {
    return (
        <div className="p-8 justify-between">
            <ServicesCard items={servicesSectionData} />
        </div>
    )
}