import ServicesItem from "./ServicesItem/ServicesItem";
import { servicesTextData } from "@/data/services";

export default function ServicesGrid() {
    return (
        <div className="grid grid-cols-2 gap-6">
            {servicesTextData.map((item) => (
                <ServicesItem
                    key={item.title}
                    item={item}
                />
            ))}
        </div>
    );
}