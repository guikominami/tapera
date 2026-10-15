
import InstagramButton from "./InstagramButton"
import WhatsappButton from "./WhatsappButton"
import EmailButton from "./EmailButton"

export default function FooterEmailInfoMobile() {
    return (
        <div
            className="
                flex w-full flex-row
                items-stretch
                overflow-hidden
            "
        >
            <InstagramButton />
            <EmailButton />
            <WhatsappButton />
        </div >
    )
}