import { actionsTextData } from "@/data/actions";
import ActionsItem from "./ActionsItem/ActionsItem";

export default function ActionsGrid() {
    const columns = [1, 2, 3];

    return (
        <div
            className="
                flex
                flex-col
                gap-0
                lg:grid 
                lg:grid-cols-[repeat(3,508px)] 
                lg:gap-6
            "
        >
            {columns.map((column) => (
                <div
                    key={column}
                    className="
                        gap-0
                        lg:flex 
                        lg:flex-col 
                        lg:gap-6
                    "
                >
                    {actionsTextData
                        .filter((item) => item.column === column)
                        .map((item) => (
                            <ActionsItem
                                key={item.title}
                                item={item}
                            />
                        ))}
                </div>
            ))}
        </div>
    );
}