import type { SVGProps } from "react";

type OrganicShapeSvgProps = SVGProps<SVGSVGElement>;

export default function OrganicShapeSvg({
    className,
    ...props
}: OrganicShapeSvgProps) {
    return (
        <svg
            className={className}
            {...props}
            viewBox="0 0 339 302"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M-1 302H181C268.261 302 339 231.261 339 144V0H155C68.8436 0 -1 69.8436 -1 156V302Z"
                fill="#117068"
                fillOpacity={0.39}
            />
        </svg>
    );
}