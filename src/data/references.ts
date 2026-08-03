import type { ReferencesSection, ReferencesTextData } from "@/types/references";

import leftTopImage from "@/components/sections/References/ReferencesItem/frames/left-top.svg";
import leftBottomImage from "@/components/sections/References/ReferencesItem/frames/left-bottom.svg";
import rightTopImage from "@/components/sections/References/ReferencesItem/frames/right-top.svg";
import rightBottomImage from "@/components/sections/References/ReferencesItem/frames/right-bottom.svg";

export const referencesSection: ReferencesSection = {
    title: "O que falam do Taperá?"
}

export const referencesTextData: ReferencesTextData[] = [
    {
        id: 1,
        title: "Associação Imargem",
        subtitle: "“O Instituto Taperá tem sido um parceiro fundamental e acolhedor para a Associação Imargem, contribuindo com assessoria em planejamentos estratégicos, apoio na construção do projeto político-pedagógico, articulação com redes de entidades aliadas, mediação de conflitos quando necessário e suporte financeiro essencial para custos estruturantes e atividades estratégicas, fortalecendo assim nossa atuação.”",
        column: 1,
        frame: leftTopImage,
        height: "h-[390px]"
    },
    {
        id: 2,
        title: "Instituto Favela da Paz",
        subtitle: "“A parceria entre o Instituto Favela da Paz e a Taperá tem sido um encontro de afeto, respeito e construção coletiva. O Ric e a Cami são pessoas extremamente sensíveis às nossas demandas, compreendendo os desafios que enfrentamos enquanto coletivo e instituição.Com sua escuta atenta e olhar cuidadoso, eles nos apoiam por meio de encontros de mentoria, sempre dispostos a acolher e construir soluções que preservam nossa essência e filosofia. Essa troca fortalece nossos caminhos e reafirma a importância de parcerias que se constroem na confiança e no compromisso com a transformação. Somos profundamente gratos por essa caminhada juntos!”",
        column: 2,
        frame: rightTopImage,
        height: "h-[491px]"
    },    
    {
        id: 3,
        title: "Associação Bem Comum",
        subtitle: "“A parceria com a Taperá tem sido fundamental para nós aqui na Bem Comum. Desde a primeira conversa, experimentamos muito acolhimento e planos efetivos de apoio. Desde então, temos vivido diversas experiências proporcionadas pela Taperá como mediação  de conflitos institucionais, discussão de casos, apoio financeiro, escrita de projeto para financiamento via renúncia fiscal, doação de lanche e oportunidade para realizarmos expedições  de aprendizagem, que só foram possíveis com o apoio deles. Sem contar, sobre os encontros formativos, em que pudemos compartilhar tempo com as demais organizações parceiras, tempo muito encorajador e de fortalecimento mútuo. Obrigada, por tudo!”",
        column: 1,
        frame: leftBottomImage,
        height: "h-[491px]"
    },
    {
        id: 4,
        title: "Biblioteca Comunitária Djeanne Firmino",
        subtitle: "“Sentimos um grande privilégio em atuar em parceria com a Taperá, uma entidade que possui um compromisso muito sério com a escuta sensível e o respeito às múltiplas realidades dos projetos culturais das periferias. Sempre com muito cuidado e o desejo latente de potencializar. Nossas equipes compartilham de experiências enriquecedoras de trocas, que têm impactado qualitativamente no protagonismo do Instituto Djeanne Firmino e das profissionais que o compõem.”",
        column: 2,
        frame: rightBottomImage,
        height: "h-[390px]"
    },
]