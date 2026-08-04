
import type { FooterBackground } from "@/types/footer";
import FooterFramesItem from "./FooterFramesItem/FooterFramesItem";

type FooterFramesProps = {
    data: FooterBackground[];
};

export default function FooterFrames({ data }: FooterFramesProps) {

    const columns = [1, 2];

    return (
        <div className="grid grid-cols-2 gap-1">
            {columns.map((column) => (
                <div
                    key={column}
                    className="flex flex-col gap-1"
                >
                    {data
                        .filter(item => item.column === column)
                        .map(item => (
                            <FooterFramesItem
                                item={item}
                            />
                        ))}
                </div>
            ))}
        </div>
    )
}