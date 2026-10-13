import instagramButton from "@/assets/decorations/footer/instagramButton.svg"
import { footerInfo } from "@/data/footer"

export default function InstagramButton() {
    return (
        <a
            href={footerInfo.instagram}
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
                src={instagramButton}
                alt="Instagram"
                className="w-full h-full"
            />
        </a>
    )
}