import type { FooterBackground, FooterInfo } from "@/types/footer";
import footerImgPattern1 from "@/assets/decorations/footer/pattern1.svg"
import footerImgPattern2 from "@/assets/decorations/footer/pattern2.svg"
import footerImgPattern3 from "@/assets/decorations/footer/pattern3.svg"
import footerImgPattern4 from "@/assets/decorations/footer/pattern4.svg"

export const footerInfo: FooterInfo = {
    email: "tapera@gmail.com",
    whatsapp: "",
    instagram: "",
}

export const footerBackgroundLeft: FooterBackground[] = [
    {
        column: 1,
        frame: footerImgPattern2,
    },
    {
        column: 1,
        frame: footerImgPattern4,
    },
    {
        column: 2,
        frame: footerImgPattern1,
    },
    {
        column: 2,
        frame: footerImgPattern3,
    },
]

export const footerBackgroundRight: FooterBackground[] = [
    {
        column: 1,
        frame: footerImgPattern1,
    },
    {
        column: 1,
        frame: footerImgPattern2,
    },
    {
        column: 2,
        frame: footerImgPattern3,
    },
    {
        column: 2,
        frame: footerImgPattern4,
    },    
]

export const footerBackgroundCenter: FooterBackground[] = [
    {
        column: 1,
        frame: footerImgPattern1,
    },
    {
        column: 1,
        frame: footerImgPattern2,
    },
    {
        column: 1,
        frame: footerImgPattern1,
    },  
]




