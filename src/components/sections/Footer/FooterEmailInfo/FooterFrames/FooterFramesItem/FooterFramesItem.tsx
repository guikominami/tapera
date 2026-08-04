import type { FooterBackground } from "@/types/footer";

type FooterFramesItemProps = {
    item: FooterBackground
};

export default function FooterFramesItem({ item }: FooterFramesItemProps) {
    return (
        <div>
            <img
                src={item.frame}
                alt=""
                className=""
            />
        </div>
    )
}