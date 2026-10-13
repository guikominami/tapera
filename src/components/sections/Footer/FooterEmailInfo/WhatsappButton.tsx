import whatsappButton from "@/assets/decorations/footer/whatsappButton.svg"
import { footerInfo } from "@/data/footer"

export default function WhatsappButton() {
    return (
        <a
            href={footerInfo.whatsapp}
            className="
                w-[17.2%]
                lg:w-[151px]
                xl:w-[196px]
                2xl:w-[253px]                
                min-[1900px]:w-[281px]                
                shrink-0
            "
        >
            <img
                src={whatsappButton}
                alt="WhatsApp"
                className="w-full h-full"
            />
        </a>
    )
}