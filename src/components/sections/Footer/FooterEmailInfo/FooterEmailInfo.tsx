
import InstagramButton from "./InstagramButton"
import WhatsappButton from "./WhatsappButton"
import EmailButton from "./EmailButton"
import FooterFrames from "./FooterFrames/FooterFrames"
import FooterFramesCenter from "./FooterFrames/FooterFramesCenter"
import { footerBackgroundLeft, footerBackgroundRight } from "@/data/footer"

export default function FooterEmailInfo() {
    return (
        <div
            className="
                flex flex-row
                h-[281px]
                justify-center 
                items-center
                overflow-hidden
            "
        >
            <FooterFrames data={footerBackgroundLeft} />

            <InstagramButton />

            <div className="flex flex-col h-[281px]">
                <EmailButton />
                <FooterFramesCenter />
            </div>

            <WhatsappButton />

            <FooterFrames data={footerBackgroundRight} />

        </div>
    )
}