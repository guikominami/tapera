import imgEmailButton from "@/assets/decorations/footer/emailButton.svg"
import Text from "@/components/ui/Text/Text"
import { footerInfo } from "@/data/footer"

export default function EmailButton() {
    return (
        <div className="relative">
            <img
                src={imgEmailButton}
                alt="email button"
                className="w-full"
            />
            <Text
                as="p"
                variant="footer"
                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    ml-10
                    lg:ml-16
                    text-primary-light
                "
            >
                {footerInfo.email}
            </Text>

        </div>
    )
}