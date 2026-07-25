# Decisões de arquitetura

## Estrutura

- Componentes reutilizáveis ficam em `components/ui`.
- Seções da página ficam em `components/sections`.

## Estilo

- Tailwind CSS.
- Evitar CSS separado.

## Dados

- Conteúdo separado em `data/*.ts`.

## Navegação

- Landing page sem React Router.

# ADR-001

## Header independente do Hero

### Motivo

O Header pode se tornar fixo no futuro e deve ser reutilizável.

### Consequência

O Hero não conhece o Header.
O App é responsável por compor as seções.