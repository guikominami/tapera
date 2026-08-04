import FooterFramesItem from "./FooterFramesItem/FooterFramesItem"
import { footerBackgroundCenter } from "@/data/footer"

export default function FooterFramesCenter() {
    return (
        <div className="grid grid-cols-3 gap-1">
            {footerBackgroundCenter.map((item) => (
                <FooterFramesItem
                    item={item}
                />
            ))}
        </div>
    );
}

