import FooterEmailInfo from "./FooterEmailInfo/FooterEmailInfo";
import Container from "@/components/ui/Container";
import FooterLogoInfo from "./FooterLogoInfo/FooterLogoInfo";

export default function Footer() {
    return (
        <section
            id="footer"
            className="bg-divider-light"
        >
            <div>
                <FooterEmailInfo />
                <FooterLogoInfo />
            </div>
        </section>
    );
}