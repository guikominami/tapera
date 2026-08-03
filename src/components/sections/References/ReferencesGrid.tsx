import { referencesTextData } from "@/data/references";
import ReferencesItem from "./ReferencesItem/ReferencesItem";

export default function ReferencesGrid() {

    const columns = [1, 2];

    return (
        <div className="grid grid-cols-2 gap-6">
            {columns.map((column) => (
                <div
                    key={column}
                    className="flex flex-col gap-6"
                >
                    {referencesTextData
                        // filter items based on the current column and
                        //  mount a ReferencesItem for each filtered item
                        .filter(item => item.column === column)
                        .map(item => (
                            <ReferencesItem
                                key={item.title}
                                item={item}
                            />
                        ))}
                </div>
            ))}
        </div>
    );

}