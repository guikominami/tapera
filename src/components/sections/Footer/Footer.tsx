import FooterEmailInfo from "./FooterEmailInfo/FooterEmailInfo";
import FooterLogoInfo from "./FooterLogoInfo/FooterLogoInfo";
import FooterEmailInfoMobile from "./FooterEmailInfo/FooterEmailInfoMobile";

export default function Footer() {
    return (
        <section
            id="footer"
            className="bg-divider-light"
        >
            <div className="hidden lg:block">
                <FooterEmailInfo />
                <FooterLogoInfo />
            </div>
            <div className="block lg:hidden">
                <FooterEmailInfoMobile />
                <FooterLogoInfo />
            </div>
        </section >
    );
}