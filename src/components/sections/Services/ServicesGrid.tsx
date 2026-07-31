import ServicesItem from "./ServicesItem"
import { servicesTextData } from "@/data/services"

export default function ServicesGrid() {

    const leftColumn = [
        servicesTextData[0],
        servicesTextData[2],
    ];

    const rightColumn = [
        servicesTextData[1],
        servicesTextData[3],
    ];

    return (
        <div className="grid grid-cols-2 gap-6 h-full">
            <div className="flex flex-col gap-6">
                {leftColumn.map(item => (
                    <ServicesItem
                        item={item}
                        align="right"
                    />
                ))}
            </div>

            <div className="flex flex-col gap-6">
                {rightColumn.map(item => (
                    <ServicesItem
                        item={item}
                        align="left"
                    />
                ))}
            </div>
        </div>
    )

}