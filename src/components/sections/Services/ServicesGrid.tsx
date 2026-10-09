import ServicesItem from "./ServicesItem/ServicesItem";
import { servicesTextData } from "@/data/services";

export default function ServicesGrid() {
    return (
        <div
            className="
                flex
                flex-col
                mt-2
                items-start
                lg:grid 
                lg:grid-cols-2 
                lg:gap-4
                lg:mt-0
                xl:gap-5
                2xl:gap-8
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