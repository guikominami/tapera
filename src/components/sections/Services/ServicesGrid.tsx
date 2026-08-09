import ServicesItem from "./ServicesItem/ServicesItem";
import { servicesTextData } from "@/data/services";

export default function ServicesGrid() {
    return (
        <div
            className="
                flex
                flex-col
                mt-2
                items-center
                lg:grid 
                lg:grid-cols-2 
                lg:gap-6
                lg:mt-0
            ">
            {servicesTextData.map((item) => (
                <ServicesItem
                    key={item.title}
                    item={item}
                />
            ))}
        </div>
    );
}