import type { ActionsSection, ActionsTextData } from "@/types/actions";

import actionsItemColumn1Top from "@/components/sections/Actions/ActionsItem/frames/column1-top.svg";
import actionsItemColumn1Bottom from "@/components/sections/Actions/ActionsItem/frames/column1-bottom.svg";
import actionsItemColumn2Top from "@/components/sections/Actions/ActionsItem/frames/column2-top.svg";
import actionsItemColumn2Bottom from "@/components/sections/Actions/ActionsItem/frames/column2-bottom.svg";
import actionsItemColumn3Top from "@/components/sections/Actions/ActionsItem/frames/column3-top.svg";
import actionsItemColumn3Bottom from "@/components/sections/Actions/ActionsItem/frames/column3-bottom.svg";

export const actionsSection: ActionsSection = {
    title: "Nosso jeito de Atuar"
}

export const actionsTextData: ActionsTextData[] = [
    {
        id: 1,
        title: "Personalizado",
        subtitle: "Nossa atuação com cada organização é única. A partir da escuta atenta construímos um plano de trabalho conectado com as necessidades e respeitando a singularidade de cada projeto.",
        column: 1,
        frame: actionsItemColumn1Top,
        height: "h-[280px] lg:h-[424px]"
    },
    {
        id: 2,
        title: "Parcerias de Longo Prazo",
        subtitle: "Acreditamos no valor dos apoios de longo prazo, que trazem segurança e tempo para o desenvolvimento.",
        column: 1,
        frame: actionsItemColumn1Bottom,
        height: "h-[250px] lg:h-[324px]"
    },
    {
        id: 3,
        title: "Confiança",
        subtitle: "Cultivamos relações baseadas na confiança, reconhecendo a autonomia de cada organização e criando espaços seguros onde possam estar à vontade para trazer suas questões.",
        column: 2,
        frame: actionsItemColumn2Top,
        height: "h-[260px] lg:h-[374px]"
    },
    {
        id: 4,
        title: "Decolonial",
        subtitle: "Valorizamos os diferentes saberes e culturas, a diversidade de caminhos possíveis. Acreditamos no potencial das trocas respeitosas e horizontais. Chegar com escuta e abertura para construir respostas coletivamente.",
        column: 2,
        frame: actionsItemColumn2Bottom,
        height: "h-[290px] lg:h-[374px]"
    },    
    {
        id: 5,
        title: "Proximidade",
        subtitle: "Gostamos de estar perto, próximos da realidade de cada organização, acompanhando e atuando junto.",
        column: 3,
        frame: actionsItemColumn3Top,
        height: "h-[220px] lg:h-[324px]"
    },
    {
        id: 6,
        title: "Comunidade",
        subtitle: "Acreditamos que o desenvolvimento individual está intrinsecamente ligado ao social e coletivo. Estamos conectados com nosso entorno e nossas oportunidades de nos desenvolver integralmente se potencializam com relações saudáveis e comunidades fortes. ",
        column: 3,
        frame: actionsItemColumn3Bottom,
        height: "h-[320px] lg:h-[424px]"

    }
]