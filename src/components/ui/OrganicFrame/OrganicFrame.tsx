import "./OrganicFrame.css";
import OrganicFrameSvg from "./OrganicFrameSvg";

type OrganicFrameProps = {
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
};

export default function OrganicFrame({
    children,
    className = "",
    contentClassName = "",
}: OrganicFrameProps) {
    return (
        <div className={`organic-frame ${className}`}>

            <OrganicFrameSvg />

            <div className={`organic-frame__content ${contentClassName}`}>
                {children}
            </div>

        </div>
    );
}