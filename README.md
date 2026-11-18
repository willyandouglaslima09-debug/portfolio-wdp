# Portfólio Acadêmico — Relações, Princípios e Valores (WDP · 2026)

![React](https://img.shields.io/badge/React-18+-101722?style=flat-square&logo=react&logoColor=CAFA65)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-101722?style=flat-square&logo=typescript&logoColor=CAFA65)
![Vite](https://img.shields.io/badge/Vite-6+-101722?style=flat-square&logo=vite&logoColor=CAFA65)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-101722?style=flat-square&logo=tailwindcss&logoColor=CAFA65)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-101722?style=flat-square&logo=vercel&logoColor=CAFA65)

Portfólio acadêmico interativo desenvolvido para a disciplina **Relações, Princípios e Valores**, do curso de **Engenharia de Software** do **Centro Universitário Católica do Tocantins (UniCatólica)**, reunindo vivências em sala, reflexões críticas, atividades do AVA e produções coletivas ao longo do semestre.

---

## Identificação Acadêmica

* **Discente:** Willian Douglas Lima R. Pugas
* **Matrícula:** `FC20261810`
* **Curso:** Engenharia de Software — 2º Semestre / 2026
* **Instituição:** UniCatólica
* **Docente:** Prof. Antônio Cesar

---

## Estrutura das 11 Lâminas

O portfólio foi projetado em formato editorial responsivo, alternando entre visualização contínua e apresentação em lâminas (`WDP / 01` a `WDP / 11`):

| Lâmina | Código | Conteúdo |
| :--- | :--- | :--- |
| **01** | `WDP / 01` | **Capa e Identidade** — Apresentação do discente, curso, matrícula e retrato. |
| **02** | `WDP / 02` | **Percurso e Aula Introdutória (`05/07`)** — Quatro eixos da disciplina, cronograma e registro da metodologia de avaliação. |
| **03** | `WDP / 03` | **Encontro 01 (`12/07`)** — Integração, identidade, vínculos, autoconhecimento e o objeto simbólico do relógio de 20 anos. |
| **04** | `WDP / 04` | **Encontro 02 (`26/08`)** — Competências vs. habilidades, escolhas de parcerias (casos Louis Vuitton/LVMH e Karl Benz/Mercedes), filosofia da felicidade e perspectivas do mercado de software. |
| **05** | `WDP / 05` | **Encontro 03 (`09/09`) & Atividade AVA (`23/09`)** — Gincana da Ética e Moral em duplas, nuvem de palavras e reflexões sobre ética, acessibilidade e responsabilidade no desenvolvimento de software. |
| **06** | `WDP / 06` | **Encontro 04 (`21/10`)** — Dinâmica de formação de equipes por competências (leitura, criatividade e fala) e composição da paródia. |
| **07** | `WDP / 07` | **Encontro 05 (`04/11`)** — Apresentação musical da paródia em sala, superação da zona de conforto e autoria compartilhada. |
| **08** | `WDP / 08` | **Considerações Finais** — Síntese pessoal dos quatro pilares formativos (*Vínculos*, *Escolhas*, *Ética* e *Colaboração*). |
| **09 – 11** | `WDP / 09–11` | **Apêndice Criativo (Paródia)** — Letra integral da paródia (*"Ela é amiga da minha mulher"* — versão Engenharia de Software) com filtro interativo por eixos temáticos. |

---

## Funcionalidades

* **Modo Rolagem & Modo Slides:** Alternância instantânea no cabeçalho entre leitura contínua e apresentação lâmina a lâmina (com suporte às setas do teclado `←` / `→` e `Esc`).
* **Slots Interativos de Mídia:** Espaços dedicados em cada encontro para inserção, substituição e visualização em tela cheia (*Lightbox*) de fotos e vídeos das aulas.
* **Filtro por Eixos na Paródia:** Filtragem dinâmica das estrofes por *Vida Acadêmica*, *Percepção e Argumentação*, *Autoria e Inovação*, *Leitura, Escrita e Oralidade* e *Refrões*.
* **Identidade Visual Minimalista:** Contraste editorial entre superfícies escuras (`#101722` / `#090D14`), fundos claros (`#F0F1EC` / `#E3E6DE`) e acentos em verde-lima (`#CAFA65`).

---

## Tecnologias Utilizadas

* **React 18** + **TypeScript**
* **Vite** (bundler e servidor de desenvolvimento)
* **Tailwind CSS** (estilização responsiva)
* **Framer Motion** (transições e revelação tipográfica)
* **Lucide React** (iconografia)

---

## Estrutura de Pastas

```text
portfolio-wdp/
├── public/
│   └── media/                 # Fotos e vídeos dos encontros
├── src/
│   ├── components/
│   │   ├── CoverSection.tsx       # Lâmina 01 (Capa e retrato)
│   │   ├── MediaSlotCard.tsx      # Cards de mídia e modal Lightbox
│   │   ├── MotionPrimitives.tsx   # Componentes de animação e rodapé
│   │   └── PortfolioSections.tsx  # Lâminas 02 a 11
│   ├── data/
│   │   └── portfolioData.ts       # Conteúdo textual dos encontros, AVA e paródia
│   ├── types/
│   │   └── portfolio.ts           # Tipagens TypeScript
│   ├── App.tsx                    # Navegação, estados e Modo Slides
│   ├── index.css                  # Estilos globais e tokens visuais
│   └── main.tsx                   # Ponto de entrada React
├── index.html
├── package.json
└── vercel.json
```
