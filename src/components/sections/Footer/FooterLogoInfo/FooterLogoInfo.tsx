import logo from "@/assets/images/footer/logo.svg"

export default function FooterLogoInfo() {
    return (
        <div
            className="
                flex flex-row
                h-[60px]
                lg:h-[281px]
                justify-start 
                items-center
                overflow-hidden
                bg-footer
            ">
            <img
                src={logo}
                alt="logo"
                className="ml-4 w-[60px] lg:ml-30 lg:w-[281px]"
            />
        </div>
    )
}