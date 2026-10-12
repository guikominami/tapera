import frameCardTop from "@/assets/decorations/team/frameCardTop.svg";
import frameCardBottom from "@/assets/decorations/team/frameCardBottom.svg";

type TeamFrameVariant = "top" | "bottom";

type TeamOrganicFrameProps = {
    variant: TeamFrameVariant;
    children: React.ReactNode;
};

export default function TeamOrganicFrame({
    variant,
    children,
}: TeamOrganicFrameProps) {
    const frame = variant === "top"
        ? frameCardTop
        : frameCardBottom;

    const weight = variant === "top"
        ? "w-[518px]"
        : "w-[774px]"

    return (
        <div className="relative">
            <img
                src={frame}
                alt=""
            />

            <div
                className={`
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    px-3
                    ml-10
                    ${weight}    
                `}
            >
                {children}
            </div>
        </div>
    );
}