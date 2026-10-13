
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
                lg:h-[151px]
                xl:h-[196px]
                2xl:h-[253px]                
                min-[1900px]:h-[281px]
                justify-center 
                items-start
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