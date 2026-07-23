import logo from "@/assets/images/logo.svg";
import { cn } from "@/utils/cn";

type LogoProps = {
    className?: string;
};

export default function Logo({ className }: LogoProps) {
    return (
        <a href="#" className={cn("block", className)}>
            <img
                src={logo}
                alt="Logo Tapera"
                className={cn("h-8 w-auto", className)}
            />
        </a>
    );
}