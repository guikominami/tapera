import FooterEmailInfo from "./FooterEmailInfo/FooterEmailInfo";
import FooterLogoInfo from "./FooterLogoInfo/FooterLogoInfo";

export default function Footer() {
    return (
        <section
            id="footer"
            className="bg-divider-light"
        >

            <FooterEmailInfo />
            <FooterLogoInfo />

        </section>
    );
}