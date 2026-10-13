import imgEmailButton from "@/assets/decorations/footer/emailButton.svg"
import Text from "@/components/ui/Text/Text"
import { footerInfo } from "@/data/footer"

export default function EmailButton() {
    return (
        <div className="
            relative
            flex-1
            min-w-0
            lg:flex-none
            lg:w-[...]
            xl:w-[...]
            2xl:w-[...]        
        ">
            <img
                src={imgEmailButton}
                alt="email button"
                className="block w-full h-full lg:mb-1"
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
                    ml-7
                    text-center
                    text-primary-light
                    sm:text-sm
                    lg:ml-16
                    lg:m-0
                "
            >
                {footerInfo.email}
            </Text>

        </div>
    )
}