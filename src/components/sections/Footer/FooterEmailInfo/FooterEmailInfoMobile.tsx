
import InstagramButton from "./InstagramButton"
import WhatsappButton from "./WhatsappButton"
import EmailButton from "./EmailButton"

export default function FooterEmailInfoMobile() {
    return (
        <div
            className="
                flex flex-row
                justify-center 
                items-center
                overflow-hidden
            "
        >
            <InstagramButton />
            <EmailButton />
            <WhatsappButton />
        </div >
    )
}