import { actionsTextData } from "@/data/actions";
import ActionsItem from "./ActionsItem/ActionsItem";

export default function ActionsGrid() {
    const columns = [1, 2, 3];

    return (
        <div className="grid grid-cols-[repeat(3,508px)] gap-6">
            {columns.map((column) => (
                <div
                    key={column}
                    className="flex flex-col gap-6"
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