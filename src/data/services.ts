import type {ServicesText, ServicesSection} from "@/types/services" 
import servicesImage from "@/assets/images/services/services.png"

import servicesItemLeftTop from "@/components/sections/Services/ServicesItem/frames/left-top.svg";
import servicesItemLeftBottom from "@/components/sections/Services/ServicesItem/frames/left-bottom.svg";
import servicesItemRightTop from "@/components/sections/Services/ServicesItem/frames/right-top.svg";
import servicesItemRightBottom from "@/components/sections/Services/ServicesItem/frames/right-bottom.svg";

export const servicesTextData: ServicesText[] = [
    {
        id: 1,
        title: "Recursos financeiros",
        subtitle: "Mobilizamos recursos financeiros de empresas e pessoas para apoiar os projetos.",
        align: "right",
        frame: servicesItemLeftTop
    },
    {
        id: 2,
        title: "Gestão estratégica",
        subtitle: "Facilitamos espaços reflexivos, consultorias e apoio nos processos de tomada de decisão.",
        align: "left",
        frame: servicesItemRightTop
    },
    {
        id: 3,
        title: "Fortalecimento das equipes",
        subtitle: "Oferecemos espaços de formação e cuidado.",
        align: "right",
        frame: servicesItemLeftBottom       
    },
    {
        id: 4,
        title: "Apoio pedagógico",
        subtitle: "Ajudamos a planejar e implementar a estratégia pedagógica das organizações.",
        align: "left",
        frame: servicesItemRightBottom      
    },    
]

export const servicesSectionData: ServicesSection = {
    title: "Como apoiamos as Organizaçoes?",
    image: servicesImage
}