import whatsappButton from "@/assets/decorations/footer/whatsappButton.svg"
import { footerInfo } from "@/data/footer"

export default function WhatsappButton() {
    return (
        <a
            href={footerInfo.whatsapp}
            className="w-[281px] h-[281px] shrink-0"
        >
            <img
                src={whatsappButton}
                alt="WhatsApp"
                className="w-full h-full"
            />
        </a>
    )
}