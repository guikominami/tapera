import type { OrganisationsSection, Organisations } from "@/types/organisations"
import logoBemComum from "@/assets/images/organisations/logo-bemcomum.png"
import logoBiblioteca from "@/assets/images/organisations/logo-biblioteca.png"
import logoIfp from "@/assets/images/organisations/logo-ifp.png"
import logoImargem from "@/assets/images/organisations/logo-imargem.png"
import logoViela from "@/assets/images/organisations/logo-viela.png"

export const organisationsSection: OrganisationsSection = {
    title: "As Organizações",
    footer: "Saiba mais"
}

export const organisations: Organisations[] = [
    {
        id: 1,
        name: "Projeto Viela",
        description: "É comum crianças de regiões periféricas percorrerem longas distâncias para acessar oportunidades de educação e cultura, mas, para um grupo de crianças do Jardim Ibirapuera, é na viela em que moram que fica o Projeto Viela: planejado e construído com carinho, dedicação e responsabilidade.",
        logo: logoViela
    },
    {
        id: 2,
        name: "Favela da Paz",
        description: "Quanto mais conhecemos o Favela da Paz, mais nos surpreendemos com a quantidade de frentes do Instituto. Além de ser uma referência em tecnologias sustentáveis, são realizados trabalhos com música, alimentação, audiovisual, bem estar, artes e um lindo trabalho comunitário.",
        logo: logoIfp
    },
    {
        id: 3,
        name: "Associação Bem Comum",
        description: "Na associação, o acolhimento da casa e o aventurar-se pelo mundo são igualmente importantes. As/os participantes têm oportunidades nessas duas frentes, estruturando seus projetos de vida e construindo relações a partir de valores de cidadania e solidariedade.",
        logo: logoBemComum
    },
    {
        id: 4,
        name: "Biblioteca Comunitária Djeanne Firmino",
        description: "Uma biblioteca que é uma biblioteca, um espaço de brincar, de conversar, de promover encontros preciosos. Um espaço acolhedor, gerido por mulheres, que oferece mediação e clubes de leitura, empréstimo de livros, roda de mulheres, festivais, atividades culturais e de convivência comunitária.",
        logo: logoBiblioteca
    },
    {
        id: 5,
        name: "Associação Imargem",
        description: "No Grajaú, foi criada a Associação Imargem que propõe um olhar cuidadoso para as paisagens povoadas das periferias. Ações que acontecem na sede da associação, nas ruas, muros e escolas da região, nas águas da Represa Billings e em outros tantos territórios, físicos e simbólicos.",
        logo: logoImargem
    },          
]