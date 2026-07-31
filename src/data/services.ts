import type {ServicesText, ServicesSection} from "@/types/services" 
import servicesImage from "@/assets/images/services/services.png"

export const servicesTextData: ServicesText[] = [
    {
        id: 1,
        title: "Recursos financeiros",
        subtitle: "Mobilizamos recursos financeiros de empresas e pessoas para apoiar os projetos.",
        padding: "px-20 pt-20 pb-18",
    },
    {
        id: 2,
        title: "Gestão estratégica",
        subtitle: "Facilitamos espaços reflexivos, consultorias e apoio nos processos de tomada de decisão.",
        padding: "px-20 pt-20 pb-18",
    },
    {
        id: 3,
        title: "Fortalecimento das equipes",
        subtitle: "Oferecemos espaços de formação e cuidado.",
        padding: "px-20 pt-20 pb-18",       
    },
    {
        id: 4,
        title: "Apoio pedagógico",
        subtitle: "Ajudamos a planejar e implementar a estratégia pedagógica das organizações.",
        padding: "px-20 pt-20 pb-18",      
    },    
]

export const servicesSectionData: ServicesSection = {
    title: "Como apoiamos as Organizaçoes?",
    image: servicesImage
}