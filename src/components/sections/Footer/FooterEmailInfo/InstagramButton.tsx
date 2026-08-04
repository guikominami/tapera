import instagramButton from "@/assets/decorations/footer/instagramButton.svg"
import { footerInfo } from "@/data/footer"

export default function InstagramButton() {
    return (
        <a
            href={footerInfo.instagram}
            className="w-[281px] h-[281px] shrink-0"
        >
            <img
                src={instagramButton}
                alt="Instagram"
                className="w-full h-full"
            />
        </a>
    )
}