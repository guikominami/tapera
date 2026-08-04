import logo from "@/assets/images/footer/logo.svg"

export default function FooterLogoInfo() {
    return (
        <div
            className="
                flex flex-row
                h-[281px]
                justify-start 
                items-center
                overflow-hidden
                bg-footer
            ">
            <img src={logo} alt="logo" className="ml-30" />
        </div>
    )
}